"use client";

import { HeaderFunction } from "@/components/Header";
import { FooterFunction } from "@/components/Footer";
import { TituloFunction } from "@/components/titulo"
import { PlatosFunction } from '@/components/platos'

export default function PromocionesFunction() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Chita"} />
            <PlatosFunction
                productIds={[33, 34, 35, 36, 37, 38, 39]}
            />
            <FooterFunction />
        </>
    );
}