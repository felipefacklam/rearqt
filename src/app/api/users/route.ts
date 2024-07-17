import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/lib/db';
import User from '@/models/User';

export async function GET(req: NextRequest) {

  await connectMongo();

  const url = new URL(req.url); // pegqa url e cria um objeto pra acessar funcionalidades
  const id = url.searchParams.get('id'); // pega o id da url
  console.log('Get com id:', id); // só pra ver qual o id    

  if (id) {
    const user = await User.findById(id)
    console.log(user);

    if (!user) {
      return new Response(JSON.stringify({ error: 'Usuário não encontrado' }), { status: 404 });
    }

    return new Response(JSON.stringify(user), { status: 200 });
  } else {
    const users = await User.find({});
    console.log(users);
    return new Response(JSON.stringify(users), { status: 200 });
  }

}

export async function POST(req: NextRequest, res: NextResponse) {

  await connectMongo();

  const data = await req.json()//parse req em json
  const user = new User(data) //ria novo user
  await user.save(); // Alva no banco
  console.log('Usuário criado: ', user);

  return NextResponse.json({
    message: "Usuario criado com sucesso!"
  })

}

export async function PUT(req: NextRequest, res: NextResponse) {

  await connectMongo();

  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  const data = await req.json();

  const user = await User.findByIdAndUpdate(id, data);

  if (!user) {
    return NextResponse.json({
      message: "Usuário não encontrado!"
    });
  }
  
  return NextResponse.json({
    message: "Usuario atualizado com sucesso!"
  });
  
}

export async function DELETE(req: NextRequest, res: NextResponse) {

  await connectMongo()

  const url = new URL(req.url)
  const id = url.searchParams.get('id')

  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return NextResponse.json({
      message: "Usuário não encontrado!"
    });
  }

  return NextResponse.json({
    message: "Usuário deletado com sucesso!"
  });

}
