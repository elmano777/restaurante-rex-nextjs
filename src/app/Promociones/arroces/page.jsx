"use client";

import { HeaderFunction } from "@/components/Header";
import { FooterFunction } from "@/components/Footer";
import { TituloFunction } from "@/components/titulo"
import { PlatosFunction } from '@/components/platos'

export default function PromocionesFunction() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Arroces"} />
            <PlatosFunction
                productIds={[14, 15, 16, 17]}
            />
            <FooterFunction />
        </>
    );
}