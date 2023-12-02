"use client";

import { HeaderFunction } from "@/components/Header";
import { FooterFunction } from "@/components/Footer";
import { TituloFunction } from "@/components/titulo"
import { PlatosFunction } from '@/components/platos'

export default function PromocionesFunction() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Ceviches"} />
            <PlatosFunction
                productIds={[27, 28, 29, 30, 31, 32]}
            />
            <FooterFunction />
        </>
    );
}