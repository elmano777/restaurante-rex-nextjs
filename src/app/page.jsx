"use client";

import { BiSolidFoodMenu } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { BiSolidDirectionLeft } from "react-icons/bi";
import Image from 'next/image'
import { HeaderFunction } from "@/components/header"
import { FooterFunction } from "@/components/footer"
import { useState } from 'react'

export default function Home() {
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
      <div className="relative w-full h-72 md:h-96">
        <Image src="/Images/lugar-transformed.jpg" alt="Place" layout="fill"/>
      </div>
      <div
        className="flex flex-col items-center justify-center w-full bg-red-700 h-28 
      font-mono text-xl"
      >
        <p>Haz tu pedido aquí!</p>
        <button className="flex flex-row items-center bg-gray-400 p-4 rounded-xl gap-2">
          Carta
          <BiSolidFoodMenu />
        </button>
      </div>
      <div className="flex flex-col md:flex-row w-full h-auto">
        <div className="flex flex-col w-full md:w-1/2 p-12 text-center">
          <p className="text-3xl py-2 font-serif">
            Bienvenidos a Cevicheria Richard`s
          </p>
          <div className="text-xl text-start">
            Richards pescados y mariscos, le da la bienvenida a nuestra página
            web donde podrá conocer un poco de la empresa así como sus
            exquisitos platos. Nuestra cevicheria se caracteriza por brindar un
            servicio de calidad, con platos innovadores, trato cariñoso y
            personalizado para todos nuestros clientes.
            <div className="w-full h-1 bg-black rounded-full my-2" />
            El objetivo de nuestra web, es presentar nuestras promociones, que
            todos nuestros clientes conozcan todos los platos que tiene nuestra
            amplia carta y puedan realizar sus compras a través de nuestra
            e-commerce diseñada para realizar delivery desde la comodidad de su
            hogar así como generar sus reservas para cumpleaños o alguna ocasión
            especial.
          </div>
        </div>
        <Image
          src="/Images/lugar-transformed.jpg"
          alt="another"
          className="w-full md:w-1/2 h-auto p-12 rounded-lg"
          width={500} height={288}
        />
      </div>
      <div className="flex flex-col md:flex-row w-auto h-auto bg-red-700">
        <div
          className="flex flex-col items-center justify-center w-11/12 md:w-1/3 h-96 
        bg-black text-white mx-4 my-6"
        >
          <AiFillPhone className="w-48 h-48" />
          <p>Teléfonos: 266 - 0426</p>
          <p>Email: reservaciones@cevicheriarichards.com</p>
        </div>
        <div
          className="flex flex-col items-center justify-center w-11/12 md:w-1/3 h-96 
        bg-black text-white mx-4 my-6"
        >
          <AiFillClockCircle className="w-48 h-48" />
          <p>De Lunes a Domingo</p>
          <p>de 11:00 am a 8:00 pm</p>
        </div>
        <div
          className="flex flex-col items-center justify-center w-11/12 md:w-1/3 h-96 
        bg-black text-white mx-4 my-6"
        >
          <BiSolidDirectionLeft className="w-48 h-48" />
          <p>Dirección</p>
          <p>Brigadier Pumacahua 2321</p>
          <p>Brigadier Pumacahua 2318</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full h-auto">
        <Image
          src="/Images/lugar-transformed.jpg"
          alt="another"
          className="w-full md:w-1/2 h-auto p-12 rounded-lg"
          width={500} height={288}
        />
        <div className="flex flex-col w-full md:w-1/2 p-12 text-center">
          <p className="text-3xl py-2 font-serif">
            Bienvenidos a Cevicheria Richard`s
          </p>
          <div className="text-xl text-start">
            Richards pescados y mariscos, le da la bienvenida a nuestra página
            web donde podrá conocer un poco de la empresa así como sus
            exquisitos platos. Nuestra cevicheria se caracteriza por brindar un
            servicio de calidad, con platos innovadores, trato cariñoso y
            personalizado para todos nuestros clientes.
            <div className="w-full h-1 bg-black rounded-full my-2" />
            El objetivo de nuestra web, es presentar nuestras promociones, que
            todos nuestros clientes conozcan todos los platos que tiene nuestra
            amplia carta y puedan realizar sus compras a través de nuestra
            e-commerce diseñada para realizar delivery desde la comodidad de su
            hogar así como generar sus reservas para cumpleaños o alguna ocasión
            especial.
          </div>
        </div>
      </div>
      <FooterFunction/>
    </>
  )
}