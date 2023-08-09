import Image from "next/image";
export default function Footer() {
    return(
        <div className={` flex justify-between items-center
        w-screen h-32 bg-brown-first px-[200px] py-10`
        }>
            <div className="flex gap-10 items-center text-white">
                <h3>LOGO</h3>
                <div className="border-l-2 border-gold-first pl-10 opacity-25">
                    <p className="text-sm">Renata Mesquita d'Avila 2023</p>
                    <p className="text-sm">Desenvolvido por Felipe Facklam</p>
                </div>
            </div>
            <div className="flex gap-2 pr-[200px]">
            <Image
                src="/icons/linkedin.png"
                width={24}
                height={24}
                alt="linkedin"
                className='flex'
            />
            <Image
                src="/icons/instagram.png"
                width={24}
                height={24}
                alt="linkedin"
                className=''
            />
            <Image
                src="/icons/facebook.png"
                width={24}
                height={24}
                alt="linkedin"
                className=''
            />
            </div>
        </div>
    )
}