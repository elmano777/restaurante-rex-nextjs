import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db";
import bcrypt from "bcrypt";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text", placeholder: "email" },
                password: {
                    label: "password",
                    type: "password",
                    placeholder: "password",
                },
            },
            async authorize(credentials, req) {
                console.log(credentials);
                const userFound = await db.datausers2.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });
                if (!userFound) return null;
                console.log(userFound);
                const matchPassword = await bcrypt.compare(credentials.password, userFound.password)
                if (!matchPassword) return null;
                return {
                    id: userFound.id,
                    name: userFound.username,
                    email: userFound.email,
                }
            },
        }),
    ],
};

const handler = nextAuth(authOptions);
export { handler as POST, handler as GET };
