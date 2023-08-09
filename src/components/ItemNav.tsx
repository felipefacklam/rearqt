'use client'
import Link from "next/link"
import { useState } from "react"

interface ItemNavProps{
    text: string
    menu: string[]
}

export default function ItemNav(props: ItemNavProps) {
    return(
        <div className={`
        w-32 text-center font-semibold text-lg rounded-md
        text-green-first 
        hover:bg-gold-first
        hover:text-brown-first
        ease-in duration-200`}>
            <button className="drop-shadow-sm">{props.text}</button>
        </div>
    )
}