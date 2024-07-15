import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? ""
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      credentials: {
        username: { label: "Usuário", type: "text" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null
        }

        if (credentials.username === "rearqt" && credentials.password === "080412") {
          return { id: '1', name: "Renata d'Avila", email: 'rntmdavila@gmail.com', image: '/profile-pic.jpg' }
        }
        
        if (credentials.username === "admin" && credentials.password === "080412") {
          return { id: '2', name: "Admin", email: 'felipefacklam@gmail.com', image: null }
        }

        return null
      }
    })
  ]})

export { handler as GET, handler as POST }