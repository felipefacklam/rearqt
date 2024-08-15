import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return(
        <div className={` flex justify-between items-center
        w-screen h-32 bg-green-primary px-[200px] py-10`
        }>
            <div className="flex gap-10 items-center text-white">
            <Image 
                src="/icons/logo.jpg"
                width={40}
                height={40}
                alt="Linkedin"
                className='flex'
            />
                <div className="border-l-2 border-gold-primary pl-10 opacity-25">
                    <p className="text-sm">Renata Mesquita d'Avila 2023</p>
                    <p className="text-sm">Desenvolvido por Felipe Facklam</p>
                </div>
            </div>
            <div className="flex gap-2 pr-[200px]">
            <Link href={'https://br.linkedin.com/in/renata-mesquita-d-avila-800404197'} target="_blank">
            <Image
                src="/icons/linkedin.png"
                width={24}
                height={24}
                alt="Linkedin"
                className='flex'
            />
            </Link>
            <Link href={'https://www.instagram.com/re.arqt/'} target="_blank">
            <Image
                src="/icons/instagram.png"
                width={24}
                height={24}
                alt="Instagram"
                className=''
                />
            </Link>
            <Link href={''} target="_blank">
            <Image
                src="/icons/facebook.png"
                width={24}
                height={24}
                alt="Facebook"
                className=''
            />
            </Link>
            </div>
        </div>
    )
}