import Image from 'next/image'

interface ArticlePrimaryProps{
    title1: string
    title2: string
    text: string
    image1: string;
    image2: string;
    image3: string;
    image4: string;
}
export default function ArticlePrimary(props: ArticlePrimaryProps) {
    return(
        <div className='flex justify-center text-gold-primary p-10 drop-shadow-lg'>
            <div className='flex flex-col gap-14 justify-center  w-[500px] p-12'>   
                <div className='flex'>
                    <h2 className='text-3xl text-gold-primary underline underline-offset-4 drop-shadow-2xl'>
                        {props.title1}
                        <span className='text-3xl text-green-primary drop-shadow-2xl'> {props.title2}</span>
                    </h2>
                </div>
                <p className='text-xl  text-brown-primary text-justify drop-shadow-2xl'>{props.text}</p>
            </div>
            <div className='flex gap-4'>
                <Image
                    src={props.image1}
                    width={100}
                    height={500}
                    alt="image"
                    className='drop-shadow-2xl bg-slate-50 rounded-sm mb-2 scale-95 hover:scale-100 ease-in duration-200'
                />
                <Image
                    src={props.image2}
                    width={100}
                    height={500}
                    alt="image"
                    className='drop-shadow-2xl bg-slate-50 rounded-sm mt-8 scale-95 hover:scale-100 ease-in duration-200'
                />
                <Image
                    src={props.image3}
                    width={100}
                    height={500}
                    alt="image"
                    className='drop-shadow-2xl bg-slate-50 rounded-sm mb-4 mt-4 scale-95 hover:scale-100 ease-in duration-200'
                />
                <Image
                    src={props.image4}
                    width={100}
                    height={500}
                    alt="image"
                    className='drop-shadow-2xl bg-slate-50 rounded-sm mt-2 scale-95 hover:scale-100 ease-in duration-300'
                />
            </div>
        </div>
    )
}