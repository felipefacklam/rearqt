"use client";
import Link from "next/link";
import { useState } from "react";

interface NavContatoProps {
  text: string;
  menu: string[];
} 

export default function NavContato(props: NavContatoProps) {
  return (
    <div
      className={`group
        w-40 text-center font-semibold text-lg rounded-t-md
        text-green-primary 
        hover:bg-gold-primary
        hover:bg-opacity-70
        hover:text-brown-primary
        ease-in duration-300`}
    >
      <button className="drop-shadow-sm">{props.text}</button>
      <div className={`
        absolute hidden group-hover:flex hover:flex
        flex-col bg-inherit w-40 border border-t-8 rounded-b-md
      `}>
        <ul className="flex flex-col gap-2 px-2 py-4">
            <Link href="https://wa.me/+5551993959971?text=Olá, Arq. Renata! Gostaria de conversar sobre seus serviços." target="_blank" className={`
              underline-animation
              hover:border-b-2 border-green-primary
              `}>WhatsApp
            </Link>
              <Link href="https://www.instagram.com/re.arqt/"className={`
                underline-animation
                hover:border-b-2 border-green-primary
              `}>Instagram
              </Link>
              <Link href=""className={`
                underline-animation
                hover:border-b-2 border-green-primary
              `}>Facebook
              </Link>
              <Link href=""className={`
                underline-animation
                hover:border-b-2 border-green-primary
              `}>Linkedin
              </Link>
        </ul>
      </div>
    </div>
  );
}
