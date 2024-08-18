import Footer from "@/components/Footer";
import FormProjeto from "@/components/FormProjeto";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

export default function NovoProjetoPage() {
  return (
    <div className="flex flex-col justify-center items-center bg-zinc-200">
      <Header />
      <div className="w-2/4 p-10 h-min-screen">
        <Link href={"/dashboard"}>
          <button className="italic">Voltar</button>
        </Link>
        <h1 className="font-extrabold text-2xl text-brown-primary">
          Novo Projeto
        </h1>
        <FormProjeto />
      </div>
      <Footer />
    </div>
  );
}
