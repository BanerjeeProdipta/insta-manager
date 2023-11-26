import NextAuth, { NextAuthOptions } from "next-auth";
import InstagramProvider from "next-auth/providers/instagram";

const options: NextAuthOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  providers: [
    InstagramProvider({
      clientId: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      return Promise.resolve(session);
    },
  },

  pages: {
    signIn: "/auth/signin",
  },
};
const handler = NextAuth(options);

export { handler as GET, handler as POST };
