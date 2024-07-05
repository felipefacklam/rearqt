import { useSession, getSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function ProjetoDetalhes({ projeto }) {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    return <p>Acesso negado. Por favor, faça login.</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-6">{projeto.titulo}</h1>
      <p className="mb-4">{projeto.descricao}</p>
      <p className="mb-4">Tipo: {projeto.tipo}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projeto.imagens.map((imagem, index) => (
          <div key={index} className="border p-2 rounded">
            <img src={imagem} alt={`Imagem ${index + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.params;

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/projetos/${id}`);
  const projeto = res.data.data;

  return {
    props: {
      session,
      projeto,
    },
  };
}