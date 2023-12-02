"use client";

import { HeaderFunction } from "@/components/Header";
import { FooterFunction } from "@/components/Footer";
import { TituloFunction } from "@/components/titulo"
import { PlatosFunction } from '@/components/platos'

export default function PromocionesFunction() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Lenguado"} />
            <PlatosFunction
                productIds={[54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]}
            />
            <FooterFunction />
        </>
    );
}