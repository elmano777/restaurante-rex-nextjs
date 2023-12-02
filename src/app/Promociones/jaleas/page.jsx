"use client";

import { HeaderFunction } from "@/components/Header";
import { FooterFunction } from "@/components/Footer";
import { TituloFunction } from "@/components/titulo"
import { PlatosFunction } from '@/components/platos'

export default function PromocionesFunction() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Jaleas"} />
            <PlatosFunction
                productIds={[47, 48, 49, 50, 51, 52, 53]}
            />
            <FooterFunction />
        </>
    );
}