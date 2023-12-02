"use client";

import Image from "next/image";
import { BsFillBasket2Fill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import Link from "next/link";

export function HeaderFunction() {
    return (
        <div className="flex flex-col bg-white text-black w-full h-auto md:flex-row">
            <div className="hidden md:flex md:w-1/4 md:h-auto md:justify-center md:items-center">
                <Image src="/Images/rex-removebg-preview.png" alt="Place" width={160} height={160} />
            </div>
            <nav className="grid grid-cols-2 h-auto justify-center items-center w-full gap-5 p-10 md:flex md:flex-row md:w-1/2">
                <Link href="/" className={"bg-black p-3 rounded-lg text-white hover:text-green-500"}>Inicio</Link>
                <Link href="/GiftCards" className="bg-black p-3 rounded-lg text-white hover:text-green-500">GiftCards</Link>
                <Link href="/Promos" className="bg-black p-3 rounded-lg text-white hover:text-green-500">Promociones</Link>
                <Link href="/Carta" className="bg-black p-3 rounded-lg text-white hover:text-green-500">Carta</Link>
                <Link href="/Reparto" className="bg-black p-3 rounded-lg text-white hover:text-green-500">Reparto</Link>
            </nav>
            <div className="flex justify-center items-center h-auto w-full md:w-1/4 gap-12">
                <button className="bg-orange-500 p-4 rounded-lg flex flex-row gap-2 items-center justify-center">
                    <BsFillBasket2Fill />
                    Carrito
                    <div className='bg-black text-white w-6 h-6 flex justify-center items-center rounded-full'>
                        <span className='text-xs'>1</span>
                    </div>
                </button>
                <Link href="/auth/login" className="bg-blue-500 p-4 rounded-lg flex flex-row gap-2 items-center justify-center">
                    <BiLogIn />
                    Usuario
                </Link>
            </div>
        </div>
    );
}
