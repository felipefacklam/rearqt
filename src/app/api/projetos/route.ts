import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/db";
import Projeto from "@/models/Projeto";

export async function GET(req: NextRequest) {

  await connectMongoDB();

  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  console.log('GET com id:', id);

  if (id) { //se a url tiver param id entra aqui
    const projeto = await Projeto.findById(id);
    console.log(projeto)

    if (!projeto) {
      return new Response("Projeto não encontrado", { status: 404 });
    }

    return new Response(JSON.stringify(projeto), { status: 200 });
  } else { //senão, retorna todos os projetos
    const projetos = await Projeto.find();
    console.log(projetos)
    return new Response(JSON.stringify(projetos), { status: 200 });
  }

}

export async function POST(req: NextRequest, res: NextResponse) {

  await connectMongoDB();
  const data = await req.json() //parse req em json
  const projeto = new Projeto(data) //cria um novo projeto
  await projeto.save() //salva no banco
  console.log("Projeto criado:", projeto)

  return NextResponse.json({
    message: "Projeto criado com sucesso!"
  });

}

export async function PUT(req: NextRequest, res: NextResponse) {

  await connectMongoDB()

  const url = new URL(req.url)
  const id = url.searchParams.get("id")
  const data = await req.json()

  const projeto = await Projeto.findByIdAndUpdate(id, data)
  console.log("Projeto atualizado", projeto)

  if (!projeto) {
    return new Response(JSON.stringify({ error: 'Projeto não encontrado' }), { status: 404 });
  }

  return NextResponse.json({
    message: "Projeto atualizado com sucesso!"
  });

}

export async function DELETE(req: NextRequest, res: NextResponse) {

  await connectMongoDB()

  const url = new URL(req.url)
  const id = url.searchParams.get("id")

  const projeto = await Projeto.findByIdAndDelete(id)
  console.log("Projeto deletado:", projeto)

  return NextResponse.json({
    message: "Projeto deletado com sucesso!"
  });
}