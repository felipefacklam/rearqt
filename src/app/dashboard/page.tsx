import { useState } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import FormProjeto from "@/components/FormProjeto";
import ButtonLogout from "@/components/ButtonLogout";
import Footer from "@/components/Footer";
import Link from "next/link";
import TableProjetos from "@/components/TableProjetos";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/loginPage");
  } else {
    return (
      <div className="h-screen bg-zinc-200">
        <Header />
        <div className="flex items-center justify-center gap-2 p-8">
          <p>Olá, {session?.user?.name}!</p>
          <ButtonLogout />
        </div>
        <div className="flex flex-col justify-center items-center gap-x-40 w-screen bg-gold-primary p-8">
          <div>
            <Link href="/novoProjetoPage">
              <button className="button mb-2">Novo Projeto</button>
            </Link>
            <TableProjetos /> 
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
