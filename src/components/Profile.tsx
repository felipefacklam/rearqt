import styles from 'profile.module.css';
import Image from "next/image";

export default function Profile() {
    return(
        <div className={`
        flex flex-col gap-2
        justify-center items-center
        pt-2 px-6 pb-6 rounded-b-full 
        bg-green-first drop-shadow-md
        `}>
            <Image
            src={'/divider-pic.png'}
            width={120}
            height={5}
            alt="devider"
            className='drop-shadow-md'
            />
            <h4 className={`
            text-brown-first font-semibold
            drop-shadow-md text-sm text-center
            `}>Renata M. d'Avila</h4>
            <Image
            src={'/profile-pic.jpg'}
            width={120}
            height={120}
            alt="profile-pic"
            className={`rounded-full drop-shadow-md`}
            />
        </div>
    )
}