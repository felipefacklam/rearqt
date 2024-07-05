import React from 'react'
import { useSession } from 'next-auth/react'

const LoginPage = () => {
  const { data: session } = useSession()

  if (session) {
    // Redirecionar para a página inicial após o login
    return <p>Você está logado!</p>
  }

  return (
    <div>
      <h1>Login</h1>
      <form method="post" action="/api/auth/signin">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default LoginPage
