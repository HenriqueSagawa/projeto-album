"use server"

import prisma from "../../prisma/prisma";

export async function getUser(email: string) {
    const result = await prisma?.user.findFirst({
        where: { email: email }
    });
    return result;
}