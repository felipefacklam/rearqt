import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import connectMongo from "@/lib/db"
import User from "@/models/User"

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? ""
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Usuário", type: "text" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        //HARDCODED
        // if (credentials.username === "rearqt" && credentials.password === "080412") {
        //   return { id: '1', name: "Renata d'Avila", email: 'rntmdavila@gmail.com', image: '/profile-pic.jpg' }
        // }

        // if (credentials.username === "admin" && credentials.password === "080412") {
        //   return { id: '2', name: "Admin", email: 'felipefacklam@gmail.com', image: null }
        // }
        //HARDCODED
        
        // Conecta ao banco de dados
        await connectMongo();

        // Busca o usuário no banco pelo nome de usuário
        const user = await User.findOne({ username: credentials.username });

        // Verifica se encontrou o usuário e se a senha está correta
        if (user && user.password === credentials.password) {

          // Retorna os dados do usuário se as credenciais estiverem corretas
          return { id: user._id, name: user.name };
        }

        return null;
      }
    })
  ]
})

export { handler as GET, handler as POST }