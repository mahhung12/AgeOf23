import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID || "",
      clientSecret: process.env.CLIENT_SECRET_KEY || "",
    }),
  ],
  secret: "ChelseaFootballClub",
  pages: {
    signIn: "/signin",
    signOut: "/signout",
    error: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
