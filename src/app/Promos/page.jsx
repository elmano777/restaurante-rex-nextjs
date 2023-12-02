"use client";

import { HeaderFunction } from "@/components/header";
import { FooterFunction } from "@/components/footer";
import { TituloFunction } from "@/components/titulo"
import { PromocionesCards } from '@/components/promociones'

export default function GiftCardsPage() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Promociones"} />
            <PromocionesCards
                productIds={[4, 5, 6, 7, 8]}
            />
            <FooterFunction />
        </>
    );
}
