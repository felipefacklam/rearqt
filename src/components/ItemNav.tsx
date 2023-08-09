'use client'
import Link from "next/link"
import { useState } from "react"

interface ItemNavProps{
    text: string
    menu: string[]
}

export default function ItemNav(props: ItemNavProps) {
    const [active, setActive] = useState<boolean>()
    return(
        <div className={`bg-black
        w-32 p-1 text-center rounded-md
        text-green-first 
        ease-in duration-200`
        }
        onMouseLeave={()=>setActive(!active)}>
            <button className="drop-shadow-sm" onMouseEnter={()=>setActive(!active)}>{props.text}</button>
            {active && (
                <ul className="flex flex-col justify-center absolute bg-inherit">
                    {
                        props.menu.map((item)=>{
                            return (
                                <Link className={`
                                    p-2
                                `}href='' key={item}>{item}</Link>
                            )
                        })
                    }
                </ul>
            )
    
            }
        </div>
    )
}