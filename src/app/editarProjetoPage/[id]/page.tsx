"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import React from "react";
import FormProjetoEditar from "@/components/FormProjetoEditar";
import Footer from "@/components/Footer";

export default function EditarProjetoPage() {
  const { id } = useParams(); // Captura o ID do projeto da URL

  return (
    <div className="flex flex-col justify-center items-center h-min-screen p-10 bg-gold-primary">
      <div className="w-2/4 p-10 h-min-screen">
        <Link href={"/dashboard"}>
          <button className="italic">Voltar</button>
        </Link>
        <h1 className="font-extrabold text-2xl text-brown-primary">
          Editar Projeto
        </h1>
        <FormProjetoEditar projetoId={id as string} />
      </div>
      <Footer />
    </div>
  );
}
