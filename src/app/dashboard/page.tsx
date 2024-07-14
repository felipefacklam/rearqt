import ButtonLogout from "@/components/ButtonLogout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      {session.user?.image && (
        <div>
          <Image 
          className="rounded-full"
          src={session.user?.image} 
          alt={"Avatar"} 
          width={150}
          height={150}/>
        </div>
      )}
      <p>Olá, {session?.user?.name}!</p>
      <ButtonLogout />
    </div>
  );
}
