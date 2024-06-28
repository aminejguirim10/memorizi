"use server";

import prisma from "@/lib/db";
import bcryptjs from "bcryptjs";

export const createUser = async (
  email: string,
  name: string,
  password: string
) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return { message: "User already exists", status: 400 };
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
    return { message: "User created", status: 201 };
  } catch (error: any) {
    return { message: error.message, status: 500 };
  }
};
