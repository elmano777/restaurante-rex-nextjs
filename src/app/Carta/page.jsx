"use client";

import { HeaderFunction } from "@/components/header";
import { CartaCardFunction } from '@/components/pagefunction'
import { FooterFunction } from "@/components/footer"
import { TituloFunction } from "@/components/titulo"
import { useState, useEffect } from 'react'
import { getRutas } from '@/prisma';

export default function CartaPage() {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
    const [rutas, setRutas] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const productsFromDB = await getRutas();
            setRutas(productsFromDB);
        };
        fetchProducts();
    }, []);
    const Rutas = rutas.slice(0, 15);
    return (
        <>
            <HeaderFunction
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts} />
            <TituloFunction titulo2={"Carta"} />
            <div className="grid grid-cols-3">
                {Rutas.map((product) => (
                    <CartaCardFunction
                        key={product.id}
                        imagen={product.imagen}
                        descripcion={product.descripcion}
                        ruta={product.ruta}
                    />
                ))}
            </div>
            <FooterFunction />
        </>
    );
}
