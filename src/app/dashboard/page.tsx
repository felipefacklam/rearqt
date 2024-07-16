import { useState } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import FormProjeto from "@/components/FormProjeto";
import ButtonLogout from "@/components/ButtonLogout";
import Footer from "@/components/Footer";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/loginPage");
  } else {
    
    return (
      <div className='h-screen'>
        <Header />
        <div className="flex items-center justify-center gap-2">
          <p>Olá, {session?.user?.name}!</p>
          <ButtonLogout />
        </div>
        <div className="flex justify-center items-center gap-x-40 h-40 w-screen bg-gold-primary">
          <button className="button">Novo Projeto</button>
          <button className="button">Editar</button>
        </div>
        <Footer />
      </div>
    );
  }
}
