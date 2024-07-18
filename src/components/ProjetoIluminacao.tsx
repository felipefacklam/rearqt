"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

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
  createdAt: string;
  updatedAt: string;
}

export default function ProjetoIluminacao() {
  const [projeto, setProjeto] = useState<Projeto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar o projeto pelo ID
    const fetchProjeto = async () => {
      try {
        const response = await fetch(`/api/projetos?id=66943290d8da7f919c8c1595`);
        const data: Projeto = await response.json();
        setProjeto(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar o projeto:", error);
        setLoading(false);
      }
    };

    fetchProjeto();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!projeto) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <div className="bg-zinc-200 px-60">
      <h1>{projeto.title}</h1>
      <p>{projeto.description}</p>
      <div className="flex flex-col justify-center items-center">
        
        <p>{projeto.images[0].description}</p>
        <div className="flex">
          {projeto.images.slice(1).map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={image.url}
                width={200}
                height={100}
                alt="image"
                className="drop-shadow-2xl bg-slate-50 rounded-t-full mb-2 scale-95 hover:scale-100 ease-in duration-200"
              />
              <p>{image.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
