"use client";

import Image from "next/image";
import { BsFillBasket2Fill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import Link from "next/link";
import { useState } from 'react';

export function HeaderFunction({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal, }) {
    const [active, setActive] = useState(false);
    const onDeleteProduct = product => {
        const results = allProducts.filter(
            item => item.id !== product.id
        );

        setTotal(total - product.costo * product.cantidad);
        setCountProducts(countProducts - product.cantidad);
        setAllProducts(results);
    };
    const onCleanCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };
    return (
        <div className="flex flex-col bg-white text-black w-full h-auto md:flex-row">
            <Link href="/" className="hidden md:flex md:w-1/4 md:h-auto md:justify-center md:items-center">
                <Image src="/Images/rex-removebg-preview.png" alt="Place" width={160} height={160} />
            </Link>
            <nav className="grid grid-cols-2 h-auto justify-center items-center w-full gap-5 p-10 md:flex md:flex-row md:w-1/2">
                <Link href="/" className={"bg-black p-3 rounded-lg text-white hover:text-green-500"}>Inicio</Link>
                <Link href="/GiftCards" className="bg-black p-3 rounded-lg text-white hover:text-green-500">GiftCards</Link>
                <Link href="/Promos" className="bg-black p-3 rounded-lg text-white hover:text-green-500">Promociones</Link>
                <Link href="/Carta" className="bg-black p-3 rounded-lg text-white hover:text-green-500">Carta</Link>
                <Link href="/Reparto" className="bg-black p-3 rounded-lg text-white hover:text-green-500">Reparto</Link>
            </nav>
            <div className="flex justify-center items-center h-auto w-full md:w-1/4 gap-12">
                <div className='relative'>
                    <div
                        className=''
                        onClick={() => setActive(!active)}
                    >
                        <button className="bg-orange-500 p-4 rounded-lg flex flex-row gap-2 items-center justify-center">
                            <BsFillBasket2Fill />
                            Carrito
                            <div className='bg-black text-white w-6 h-6 flex justify-center items-center rounded-full'>
                                <span className='text-xs'>{countProducts}</span>
                            </div>
                        </button>
                    </div>

                    <div
                        className={`absolute top-16 right-0 bg-white w-96 z-10 shadow-md rounded-lg ${active ? '' : 'hidden'
                            }`}
                    >
                        {allProducts.length ? (
                            <>
                                <div className="">
                                    {allProducts.map(product => (
                                        <div className='flex justify-between items-center p-6 border-b border-gray-200' key={product.id}>
                                            <div className='flex-0.8 flex justify-between gap-2'>
                                                <span className='font-medium text-lg'>
                                                    {product.cantidad}
                                                </span>
                                                <p className='text-lg'>
                                                    {product.titulo}
                                                </p>
                                                <span className='font-bold text-lg mr-5'>
                                                    ${product.costo}
                                                </span>
                                            </div>
                                            <MdCancel className="w-6 h-6 transition-colors hover:text-red-500 cursor-pointer" onClick={() => onDeleteProduct(product)} />
                                        </div>
                                    ))}
                                </div>

                                <div className='flex justify-center items-center py-5 space-x-5'>
                                    <h3 className='text-lg font-bold'>Total:</h3>
                                    <span className='text-lg font-black'>${total}</span>
                                </div>

                                <button className='w-full py-3.5 mt-2 rounded-b-lg font-bold text-sm transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105 hover:rounded-none' onClick={onCleanCart}>
                                    Vaciar Carrito
                                </button>
                            </>
                        ) : (
                            <p className='p-5 text-center'>El carrito está vacío</p>
                        )}
                    </div>
                </div>
                <Link href="/auth/login" className="bg-blue-500 p-4 rounded-lg flex flex-row gap-2 items-center justify-center">
                    <BiLogIn />
                    Rifa
                </Link>
            </div>
        </div>
    );
}
