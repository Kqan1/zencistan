import { db } from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcryptjs-react";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    pages: {
        // signIn: "/login",
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "email",
                    type: "text",
                    placeholder: "email",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const dbUser = await db.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                if (!dbUser) return null;

                const isPasswordValid = await compare(
                    credentials.password,
                    dbUser.password
                );

                if (!isPasswordValid) return null;

                return {
                    id: dbUser.id,                    
                    name: dbUser.name,
                    surname: dbUser.surname,
                    email: dbUser.email,
                    emailVerified: dbUser.emailVerified,
                    phoneNumber: dbUser.phoneNumber,
                    phoneNumberVerified: dbUser.phoneNumberVerified,
                    password: dbUser.password,
                    pp: dbUser.pp,
                    banner: dbUser.banner,
                    role: dbUser.role,
                    balance: dbUser.balance,
                    createdAt: dbUser.createdAt,
                    updatedAt: dbUser.updatedAt
                };
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,                    
                    name: token.name,
                    surname: token.surname,
                    email: token.email,
                    emailVerified: token.emailVerified,
                    phoneNumber: token.phoneNumber,
                    phoneNumberVerified: token.phoneNumberVerified,
                    password: token.password,
                    pp: token.pp,
                    banner: token.banner,
                    role: token.role,
                    balance: token.balance,
                    createdAt: token.createdAt,
                    updatedAt: token.updatedAt
                },
            };
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,                    
                    name: u.name,
                    surname: u.surname,
                    email: u.email,
                    emailVerified: u.emailVerified,
                    phoneNumber: u.phoneNumber,
                    phoneNumberVerified: u.phoneNumberVerified,
                    password: u.password,
                    pp: u.pp,
                    banner: u.banner,
                    role: u.role,
                    balance: u.balance,
                    createdAt: u.createdAt,
                    updatedAt: u.updatedAt
                };
            }
            return token;
        },
    }
};