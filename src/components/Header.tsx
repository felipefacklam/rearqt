import Link from "next/link";
import NavContato from "./NavContato";
import NavServicos from "./NavServicos";
import Profile from "./Profile";

export default function Header() {
  return (
    <div className="flex items-center bg-zinc-200 pb-10">
      <nav className="w-screen px-10">
        <ul className={`flex items-center gap-6`}>
          <div className="bg-gold-primary flex-1 h-[1px]" />
          <NavContato
            text="Contato"
            menu={["WhatsApp", "Instagram"]}
            ></NavContato>
          <Profile />
          <NavServicos
            text="Serviços"
            routes={[
              "arquitetonicosPage",
              "interioresPage",
              "iluminacaoPage",
              "regularizacaoPage",
            ]}
            menu={[
              "Arquitetônicos",
              "Interiores",
              "Iluminação",
              "Regularização",
            ]}
            ></NavServicos>
          <div className="bg-gold-primary flex-1 h-[1px]" />
        </ul>
            <Link href="/loginPage"><button className="opacity-0 hover:opacity-100 transition-opacity duration-300 button">Login</button></Link>
      </nav>
    </div>
  );
}
