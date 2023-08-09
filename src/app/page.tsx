
import Footer from '@/components/Footer'
import ItemNav from '@/components/ItemNav'
import Post from '@/components/Post'
import Profile from '@/components/Profile'
import { strict } from 'assert'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-200 ">
      <header>
        <nav className='w-screen px-10'>
          <ul className={`flex items-center gap-6`}>
            <div className='bg-gold-first flex-1 h-[1px]'/>
            <ItemNav text='Perfil' menu={[]}></ItemNav>
              <Profile/>
            <ItemNav text='Serviços' menu={['Arquitetônicos','Interiores', 'Regularização']}></ItemNav>
            <div className='bg-gold-first flex-1 h-[1px]'/>
          </ul>
        </nav>
      </header>
      <article className='flex p-20 drop-shadow-md'>
        <Post title1='INTERIORES' title2='estéticos e funcionais' text='It is a long established fact that a reader will be 
          distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
          of letters, as opposed to using' image1='/interior-01-150x600.jpg' image2='/interior-02-150x600.jpg' 
          image3='/interior-03-150x600.jpg' image4='/interior-04-150x600.jpg'/>
      </article>
      <Footer/>
    </main>
  )
}