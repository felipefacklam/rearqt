import { useState } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import FormProjeto from "@/components/FormProjeto";
import ButtonLogout from "@/components/ButtonLogout";
import Footer from "@/components/Footer";
import Link from "next/link";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/loginPage");
  } else {
    return (
      <div className="h-screen">
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
            <table className="table-fixed border-collapse max-w-xl">
              <thead>
                <tr>
                  <th className="border border-slate-600">Título</th>
                  <th className="border border-slate-600">Imagens</th>
                  <th className="border border-slate-600">
                    Última modificação
                  </th>
                  <th className="border border-none"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-700">
                    Projeto Nome Teste
                  </td>
                  <td className="border border-slate-700">5</td>
                  <td className="border border-slate-700">16/07/2024</td>
                  <td className="border border-none">
                    <button className="button w-full">Editar</button>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700">Projeto 1</td>
                  <td className="border border-slate-700">7</td>
                  <td className="border border-slate-700">04/04/2024</td>
                  <td className="border border-none">
                    <button className="button w-full">Editar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
