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
      setProjetos(projetos?.filter(projeto => projeto._id !== id) || null);
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
      <table className="table-fixed border-collapse max-w-xl">
        <thead>
          <tr>
            <th className="border border-brown-primary">Título</th>
            <th className="border border-brown-primary">Imagens</th>
            <th className="border border-brown-primary">Última modificação</th>
            <th className="border border-none"></th>
          </tr>
        </thead>
        <tbody>
          {projetos.map((projeto, index) => (
            <tr key={projeto._id}> {/* preciso passar como props para EDITAR */}
              <td className="border border-brown-primary">{projeto.title}</td>
              <td className="border border-brown-primary text-center">
                {projeto.images.length}
              </td>
              <td className="border border-brown-primary">{projeto.updatedAt}</td>
              <td className="border border-none">
                <div className="flex gap-1">
                  <Link href={`/editarPage/${projeto._id}`}><button className="button w-full">Editar</button></Link>
                  <button className="button w-full delete" onClick={() => handleDelete(projeto._id)}>
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
