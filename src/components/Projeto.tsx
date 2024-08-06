"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

interface Image {
  url: string;
  description: string;
}

interface Projeto {
  _id: string;
  title: string;
  description: string;
  type: string;
  images: Image[];
}

export default function Projeto() {
  const [projeto, setProjeto] = useState<Projeto | null>(null);
  const { id } = useParams(); // pega ID dos params da rota

  useEffect(() => {
    const fetchProjeto = async () => {
      try {
        const response = await fetch(`/api/projetos?id=${id}`); // usa o ID do params
        const data: Projeto = await response.json();
        setProjeto(data);
      } catch (error) {
        console.error("Erro ao buscar o projeto:", error);
      }
    };

    if (id) {
      fetchProjeto();
    }
  }, [id]);

  if (!projeto) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <div className="flexbg-zinc-200 px-60">
      <h1>{projeto.title}</h1>
      <p>{projeto.description}</p>
      <div className="flex flex-col justify-center items-center">
        {projeto.images.length > 0 && (
          <div className="flex flex-col items-center">
            <Image
              src={projeto.images[0].url}
              width={800}
              height={400}
              alt={projeto.images[0].description}
              className="
                drop-shadow-2xl bg-slate-50 
                mb-2 scale-95 
                hover:scale-100 
                ease-in duration-200"
            />
            <p>{projeto.images[0].description}</p>
          </div>
        )}
        <div className="flex flex-wrap justify-center bg-slate-500">
            {projeto.images.slice(1).map((image, index) => (
              <div key={index} className="flex flex-col items-center mt-4">
                <Image
                  src={image.url}
                  width={400}
                  height={200}
                  alt={image.description}
                  className="
                    drop-shadow-2xl bg-slate-50
                    mb-2 scale-95
                    hover:scale-100
                    ease-in duration-200"
                />
                <p>{image.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
