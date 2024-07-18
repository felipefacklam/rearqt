import FormProjeto from '@/components/FormProjeto'
import Link from 'next/link'
import React from 'react'

export default function NovoProjetoPage() {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gold-primary'>
      <div className=' '>
          <Link href={'/dashboard'}><button className='italic'>Voltar</button></Link>
          <h1 className='font-extrabold text-2xl text-brown-primary'>Novo Projeto</h1>
          <FormProjeto />
      </div>
    </div>
  )
}