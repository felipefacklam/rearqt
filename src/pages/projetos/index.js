import { useSession, getSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Projetos() {
  const { data: session } = useSession();
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    const fetchProjetos = async () => {
      const res = await axios.get('/api/projetos');
      setProjetos(res.data.data);
    };

    fetchProjetos();
  }, []);

  if (!session) {
    return <p>Acesso negado. Por favor, faça login.</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-6">Projetos</h1>
      <Link href="/projetos/novo">
        <button className="p-2 bg-green-500 text-white rounded mb-4">Novo Projeto</button>
      </Link>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Título</th>
            <th className="py-2 px-4 border">Tipo</th>
            <th className="py-2 px-4 border">Ações</th>
          </tr>
        </thead>
        <tbody>
          {projetos.map((projeto) => (
            <tr key={projeto._id}>
              <td className="py-2 px-4 border">{projeto.titulo}</td>
              <td className="py-2 px-4 border">{projeto.tipo}</td>
              <td className="py-2 px-4 border">
                <Link href={`/projetos/${projeto._id}`}>
                  <button className="p-2 bg-blue-500 text-white rounded mr-2">Ver</button>
                </Link>
                <Link href={`/projetos/editar/${projeto._id}`}>
                  <button className="p-2 bg-yellow-500 text-white rounded mr-2">Editar</button>
                </Link>
                <button onClick={() => deleteProjeto(projeto._id)} className="p-2 bg-red-500 text-white rounded">Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const deleteProjeto = async (id) => {
  if (confirm('Tem certeza que deseja deletar este projeto?')) {
    await axios.delete(`/api/projetos/${id}`);
    window.location.reload();
  }
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}