import NavContato from "./NavContato";
import NavServicos from "./NavServicos";
import Profile from "./Profile";

export default function Header() {
  return (
    <div>
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
      </nav>
    </div>
  );
}
