"use client";

import { HeaderFunction } from "@/components/header";
import { FooterFunction } from "@/components/footer";
import { TituloFunction } from "@/components/titulo"
import { GiftFunction } from '@/components/giftcards'
import { useState } from 'react'

export default function GiftCardsPage() {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
    return (
        <>
            <HeaderFunction
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts} />
            <TituloFunction titulo2={"GiftCards"} />
            <GiftFunction
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                productIds={[1, 2, 3]}
            />
            <FooterFunction />
        </>
    );
}
