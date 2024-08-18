'use client'

import { signOut } from "next-auth/react"

export default function ButtonLogout() {
  return (
    <div>
        <button onClick={() => signOut()}
            className="button"
            >Sair
        </button>
    </div>
  )
}