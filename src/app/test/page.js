import connectMongo from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function Page() {
  try {
    await connectMongo();
    return (
      <div>
        <h1>Conexão com MongoDB realizada com sucesso!</h1>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>Erro ao conectar com o MongoDB</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}
