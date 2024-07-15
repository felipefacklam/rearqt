'use client'

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await signIn("credentials", {
      redirect: true,
      callbackUrl: '/dashboard',
      username,
      password,
    });
  };

  return (
    <div>
      <div>LoginPage</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nome de Usuário:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className='bg-green-primary p-2'>
          Login
        </button>
      </form>
      
      {/* <button onClick={() => signIn("github", { callbackUrl: '/dashboard'})} 
          className='bg-green-primary p-2'
          >
          Login com GitHub
      </button> */}
    </div>
  );
}
