'use client'

import { signOut } from "next-auth/react"

export default function ButtonLogout() {
  return (
    <div>
        <button onClick={() => signOut()}
            className="bg-green-primary p-2 rounded-sm font-bold"
            >Logout
        </button>
    </div>
  )
}