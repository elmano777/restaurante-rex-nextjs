"use server";

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getProducts() {
    const products = await prisma.Product.findMany({
        take: 4,
    })
    return products
}
