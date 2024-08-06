"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function IluminacaoPage() {
    const [projetos, setProjetos] = useState<Projeto[] | null>(null);
  const router = useRouter();

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

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await fetch("/api/projetos");
        const data: Projeto[] = await response.json();
        const iluminacao = data.filter(projeto => projeto.type === "Iluminação");
        setProjetos(iluminacao);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      }
    };

    fetchProjetos();
  }, []);

  const handleProjetoClick = (id: string) => {
    router.push(`/projetoPage/${id}`);
  };

  return (
    <div className="flex flex-col gap-4 w-full items-center bg-green-primary">
      <h1 className="p-10 text-3xl">Projetos de Iluminação</h1>
      {projetos ? (
        <div className="grid grid-cols-2 gap-4 p-5 bg-light-primary">
          {projetos.map((projeto, index) => (
            <div key={projeto._id} onClick={() => handleProjetoClick(projeto._id)} className="cursor-pointer">
              <h2>{projeto.title}</h2>
              <Image
                src={projeto.images[0].url}
                width={400}
                height={200}
                alt="image"
                className="
                  drop-shadow-2xl bg-slate-50
                  mb-2 scale-90
                  hover:scale-95
                  ease-in duration-200"
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Carregando...</p>
      )}
      <Footer />
    </div>
  );
}