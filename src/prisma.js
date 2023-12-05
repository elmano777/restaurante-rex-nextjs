"use server";

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getProducts() {
    const products = await prisma.Product.findMany({
        take: 81,
    })
    return products
}

export async function getRutas(){
    const rutas = await prisma.Ruta.findMany({
        take: 15,
    });
    return rutas
}