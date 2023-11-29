import { NextResponse } from "next/server";
import db from "@/libs/db";
import bcrypt from "bcrypt";

export async function POST(request) {
    try {
        const data = await request.json();
        const userFound = await db.datausers2.findUnique({
            where: {
                username: data.username,
            },
        });
        if (userFound) {
            return NextResponse.json(
                {
                    message: "usuario ya existe",
                },
                {
                    status: 400,
                }
            );
        }
        const emailFound = await db.datausers2.findUnique({
            where: {
                email: data.email,
            },
        });
        if (emailFound) {
            return NextResponse.json(
                {
                    message: "email ya existe",
                },
                {
                    status: 400,
                }
            );
        }
        console.log(data);
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newUser = await db.datausers2.create({
            data: {
                username: data.username,
                email: data.email,
                password: hashedPassword,
            },
        });
        const { password: _, ...datausers2 } = newUser;
        return NextResponse.json(datausers2);
    } catch (error) {
        return NextResponse.json(
            {
                message: error.message,
            },
            {
                status: 500,
            }
        );
    }
}
