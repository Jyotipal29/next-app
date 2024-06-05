import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/db";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        // login happens here
        // const email = credentials.email;
        // const user = await prisma?.user.findFirst({
        //   where: {
        //     email: email,
        //   },
        // });

        // if (!user) {
        //   return null;
        // }

        return {
          id: 1,
          email: "jyoti@gmail.com",
          name: "jyoti",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export const GET = handler;
export const POST = handler;
