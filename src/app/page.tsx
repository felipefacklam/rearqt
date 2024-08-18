import Footer from "@/components/Footer";
import ArticlePrimary from "@/components/ArticlePrimary";
import ArticleSecondary from "@/components/ArticleSecondary";
import ArticleTertiary from "@/components/ArticleTertiary";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-200">
      <header className="z-50">
        <Header />
      </header>
      <section className="flex flex-col items-center w-screen py-10 gap-10">
        <ArticlePrimary
          title1="INTERIORES"
          title2="criativos e úteis"
          text="Seu estilo com um design profissional. Explore alguns espaços/ambientes que tive o 
        prazer/privilégio de projetar.
        "
          image1="/interior-01-150x600.jpg"
          image2="/interior-02-150x600.jpg"
          image3="/interior-03-150x600.jpg"
          image4="/interior-04-150x600.jpg"
        />
        <ArticleSecondary
          title1="Projetos Arquitetônicos"
          title2="estéticos e funcionais"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam accusantium tempora at quibusdam, ipsam."
          image1="/residencial.jpg"
        />
        <ArticleTertiary
          title1="Consultoria"
          title2="rápida e eficaz"
          text="Muitos parceiros e fornecedores para soluções adequadas as suas necessidades."
          image1="/quarto-de-bebe.jpg"
        />
      </section>
      <Footer />
    </main>
  );
}
