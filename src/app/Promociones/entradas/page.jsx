"use client";

import { HeaderFunction } from "@/components/Header";
import { FooterFunction } from "@/components/Footer";
import { TituloFunction } from "@/components/titulo"
import { PlatosFunction } from '@/components/platos'

export default function PromocionesFunction() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Entradas"} />
            <PlatosFunction
                productIds={[40, 41, 42, 43, 44, 45, 46]}
            />
            <FooterFunction />
        </>
    );
}