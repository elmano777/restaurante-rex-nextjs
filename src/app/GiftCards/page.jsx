"use client";

import { HeaderFunction } from "@/components/header";
import { FooterFunction } from "@/components/footer";
import { TituloFunction } from "@/components/titulo"
import { GiftFunction } from '@/components/giftcards'

export default function GiftCardsPage() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"GiftCards"} />
            <GiftFunction
                productIds={[1, 2, 3]}
            />
            <FooterFunction />
        </>
    );
}
