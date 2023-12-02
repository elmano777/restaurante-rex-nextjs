"use client";

import { HeaderFunction } from "@/components/Header";
import { FooterFunction } from "@/components/Footer";
import { TituloFunction } from "@/components/titulo"
import { PlatosFunction } from '@/components/platos'

export default function PromocionesFunction() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Platos Criollos"} />
            <PlatosFunction
                productIds={[70, 71, 72, 73, 74]}
            />
            <FooterFunction />
        </>
    );
}