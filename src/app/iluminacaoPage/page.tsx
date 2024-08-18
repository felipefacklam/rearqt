"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function IluminacaoPage() {
  const [projetos, setProjetos] = useState<Projeto[] | null>(null);
  const router = useRouter();

  interface Image {
    data: string;
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
    <div className="flex flex-col min-h-screen w-screen">
      <Header />
      <div className="flex flex-col flex-grow items-center pb-20 bg-zinc-200">
        <h1 className="p-10 text-3xl text-gold-primary drop-shadow-xl">Projetos de Iluminação</h1>
        {projetos ? (
          <div className="grid grid-cols-2 gap-4 p-5">
            {projetos.map((projeto, index) => (
              <div key={projeto._id} onClick={() => handleProjetoClick(projeto._id)} className="cursor-pointer">
                <h2 className="text-center font-bold drop-shadow-sm">{projeto.title}</h2>
                <Image
                  src={projeto.images[0].data}
                  width={400}
                  height={200}
                  alt="image"
                  className="
                    drop-shadow-2xl bg-slate-50
                    my-2 rounded
                    hover:scale-105
                    ease-in duration-200"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-grow justify-center items-center">
            <p>Carregando...</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
