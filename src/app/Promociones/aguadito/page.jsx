"use client";

import { HeaderFunction } from "@/components/Header";
import { FooterFunction } from "@/components/Footer";
import { TituloFunction } from "@/components/titulo"
import { PlatosFunction } from '@/components/platos'

export default function PromocionesFunction() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Aguaditos"} />
            <PlatosFunction
                productIds={[9, 10, 11, 12, 13]}
            />
            <FooterFunction />
        </>
    );
}
