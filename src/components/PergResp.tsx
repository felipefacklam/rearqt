'use client'
import { useState } from "react";

interface PergRespProps{
    perg: string
    resp: string
}

export default function PergResp(props: PergRespProps) {
    
    const [aberto, setAberto] = useState<boolean>()
    return (
        <div className="w-[90%] md:w-3/5 border border-white rounded-md overflow-hidden">
            <div className="bg-zinc-700 p-5 cursor-pointer" 
            onClick={() => setAberto(!aberto)}>
                {props.perg}
            </div>
            {aberto && (
                <div className="p-5 text-white">
                    {props.resp}
                </div>
            )}
        </div>
    );
}
