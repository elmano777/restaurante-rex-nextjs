import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function POST(request) {
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
  const newUser = await db.datausers2.create({
    data,
  });
  return NextResponse.json(newUser);
}
