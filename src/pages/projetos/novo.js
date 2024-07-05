import { useSession, getSession } from 'next-auth/react';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function NovoProjeto() {
  const { data: session } = useSession();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('');
  const [imagens, setImagens] = useState([]);
  const router = useRouter();

  if (!session) {
    return <p>Acesso negado. Por favor, faça login.</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('/api/projetos', {
      titulo,
      descricao,
      tipo,
      imagens,
    });

    router.push('/projetos');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-6">Novo Projeto</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Título</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <label className="block mb-2">Descrição</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        ></textarea>
        <label className="block mb-2">Tipo</label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="">Selecione o tipo</option>
          <option value="Arquitetônico">Arquitetônico</option>
          <option value="Interiores">Interiores</option>
          <option value="Iluminação">Iluminação</option>
          <option value="Regularização">Regularização</option>
        </select>
        <label className="block mb-2">Imagens</label>
        <input
          type="text"
          value={imagens}
          onChange={(e) => setImagens(e.target.value.split(','))}
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Criar Projeto</button>
      </form>
    </div>
  );
}

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