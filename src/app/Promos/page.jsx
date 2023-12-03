"use client";

import { HeaderFunction } from "@/components/header";
import { FooterFunction } from "@/components/footer";
import { TituloFunction } from "@/components/titulo"
import { PromocionesCards } from '@/components/promociones'
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
            <TituloFunction titulo2={"Promociones"} />
            <PromocionesCards
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                productIds={[4, 5, 6, 7, 8]}
            />
            <FooterFunction />
        </>
    );
}
