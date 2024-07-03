"use client";
import Link from "next/link";
import { useState } from "react";

interface NavServicosProps {
  text: string;
  routes: string[];
  menu: string[];
}

export default function NavSericos(props: NavServicosProps) {
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
          {props.routes.map((route, index) => (
            <Link href={`/${route}`} key={index} className={`
              underline-animation
              hover:border-b-2 border-green-primary
            `}>
              {props.menu[index]}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
