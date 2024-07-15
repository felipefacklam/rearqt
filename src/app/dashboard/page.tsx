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
      <div className='bg-gold-primary flex-1 h-[1px]'>
        <Header />
        <p>Olá, {session?.user?.name}!</p>
        <ButtonLogout />
        <FormProjeto />
        <Footer />
      </div>
    );
  }
}
