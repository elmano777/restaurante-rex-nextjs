"use client";

import { HeaderFunction } from "@/components/Header";
import { FooterFunction } from "@/components/Footer";
import { TituloFunction } from "@/components/titulo"
import { PlatosFunction } from '@/components/platos'

export default function PromocionesFunction() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Bebidas"} />
            <PlatosFunction
                productIds={[18, 19, 20, 21, 22, 23, 24, 25, 26]}
            />
            <FooterFunction />
        </>
    );
}