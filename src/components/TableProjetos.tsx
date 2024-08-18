"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function TableProjetos() {
  const [projetos, setProjetos] = useState<Projeto[] | null>(null);

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
        setProjetos(data);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      }
    };

    fetchProjetos();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/projetos?id=${id}`, {
        method: "DELETE",
      });
      setProjetos(projetos?.filter((projeto) => projeto._id !== id) || null);
    } catch (error) {
      console.error("Erro ao deletar projeto:", error);
    }
  };

  if (!projetos) {
    return <div>Carregando projetos...</div>;
  }

  if (projetos.length === 0) {
    return <div>Nenhum projeto encontrado.</div>;
  }

  return (
    <div>
      <table className="table-fixed border-collapse">
        <thead>
          <tr>
            <th className="border  bg-gold-primary rounded-tl-lg">Título</th>
            <th className="border  bg-gold-primary">Categoria</th>
            <th className="border  bg-gold-primary">Imagens</th>
            <th className="border  bg-gold-primary rounded-tr-lg">
              Última modificação
            </th>
            <th className="border border-none"></th>
          </tr>
        </thead>
        <tbody>
          {projetos.map((projeto, index) => (
            <tr key={projeto._id} className="even:bg-zinc-200 odd:bg-white">
              <td className="border ">
                <Link href={`/editarProjetoPage/${projeto._id}`}>
                  {projeto.title}
                </Link>
              </td>
              <td className="border ">
                <Link href={`/editarProjetoPage/${projeto._id}`}>
                  {projeto.type}
                </Link>
              </td>
              <td className="border  text-center">
                <Link href={`/editarProjetoPage/${projeto._id}`}>
                  {projeto.images.length}
                </Link>
              </td>
              <td className="border">
                <Link href={`/editarProjetoPage/${projeto._id}`}>
                  {projeto.updatedAt}
                </Link>
              </td>
              <td className="border border-none bg-zinc-200">
                <div className="flex gap-1">
                  {/* <Link href={`/editarProjetoPage/${projeto._id}`}><button className="button w-full">Editar</button></Link> */}
                  <button
                    className="button w-full delete"
                    onClick={() => handleDelete(projeto._id)}
                  >
                    <Image
                      src="/icons/delete.png"
                      alt="Delete"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
