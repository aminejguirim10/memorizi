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

export const getPhotos = async () => {
  try {
    const session = await ServerSession();
    if (!session) return { message: "Unauthorized", status: 401 };
    const photos = await prisma.photo.findMany({
      where: {
        userId: session.user.id,
      },
      select: {
        id: true,
        url: true,
        createdAt: true,
      },
    });
    return {
      message: "Photos fetched",
      status: 200,
      data: photos,
    };
  } catch (error: any) {
    return { message: error.message, status: 500 };
  }
};

export const deletePhoto = async (id: string) => {
  try {
    const session = await ServerSession();
    if (!session) return { message: "Unauthorized", status: 401 };
    const photo = await prisma.photo.delete({
      where: {
        id,
        userId: session.user.id,
      },
    });
    revalidatePath("/memories");
    revalidatePath("/dashboard");
    return { message: "Photo deleted", status: 200 };
  } catch (error: any) {
    return { message: error.message, status: 500 };
  }
};
