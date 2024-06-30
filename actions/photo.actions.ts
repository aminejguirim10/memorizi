"use server";

import prisma from "@/lib/db";
import { ServerSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
export const createPhotos = async (urls: string[], userId?: string) => {
  try {
    const session = await ServerSession();
    if (!session) return { message: "Unauthorized", status: 401 };
    const photos = await prisma.photo.createMany({
      data: urls.map((url) => ({
        url,
        userId: userId!,
      })),
    });
    revalidatePath("/memories");
    revalidatePath("/dashboard");
    return { message: "Photos created", status: 201 };
  } catch (error: any) {
    return { message: error.message, status: 500 };
  }
};
