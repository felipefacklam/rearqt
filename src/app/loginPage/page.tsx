'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function LoginPage() {
  return (
    <div>
        <div>LoginPage</div>
        <button onClick={() => signIn("github", { callbackUrl: '/dashboard'})} 
            className='bg-green-primary p-2'
            >
            Login com GitHub
        </button>
    </div>
  )
}
