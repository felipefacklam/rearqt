import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '@/lib/db';
import User from '@/models/User';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await connectMongo();

        const user = await User.findOne({ username: credentials.username });

        if (!user || user.password !== credentials.password) {
          throw new Error('Credenciais inválidas');
        }

        return { id: user._id, username: user.username };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  pages: {
    signIn: '/loginPage',
  },
});

export { handler as GET, handler as POST };
