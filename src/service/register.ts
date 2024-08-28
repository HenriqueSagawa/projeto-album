"use server"

import prisma from "../../prisma/prisma";
import { User } from "@/models/User";

export async function registerUser(user: User) {
    try {
        await prisma?.user.create({
            data: user
        })
    } catch (err) {
        console.log(err);
    }
}