"use client";

import { HeaderFunction } from "@/components/header";
import { FooterFunction } from "@/components/footer"
import { TituloFunction } from "@/components/titulo"
import { useState, useEffect } from 'react'

export default function RifaPage() {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
    const [numero, setNumero] = useState(null);
    const [mensaje, setMensaje] = useState('');
    useEffect(() => {
        const rifa = localStorage.getItem('rifa');
        if (rifa) {
            const { numero, mensaje } = JSON.parse(rifa);
            setNumero(numero);
            setMensaje(mensaje);
        } else {
            const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            const mensaje = numeroAleatorio % 2 === 0 ? '¡Ganador!' : 'Lo siento';
            setNumero(numeroAleatorio);
            setMensaje(mensaje);
            localStorage.setItem('rifa', JSON.stringify({ numero: numeroAleatorio, mensaje }));
        }
    }, []);
    return (
        <>
            <HeaderFunction
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts} />
            <TituloFunction titulo2={"Resultados"} />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-10 text-center md:p-20 lg:p-40">
                <h1 className="text-4xl font-bold font-sans md:text-6xl lg:text-8xl text-blue-600">Resultado de la rifa</h1>
                <p className="text-xl font-medium font-sans md:text-2xl text-gray-700">Seleccionando</p>
                <ol className="list-decimal list-inside text-left md:text-center text-lg font-sans text-gray-800">
                    <li>Carro [97-100]: Un vehículo nuevo puede ser un gran premio. Podría ser un sedán, un SUV, o incluso un deportivo, dependiendo del presupuesto del sorteo.</li>
                    <li>Moto [86-96]: Para aquellos que prefieren las dos ruedas, una motocicleta puede ser un premio emocionante. Hay muchas opciones, desde motos de ciudad hasta motos de carreras.</li>
                    <li>Dinero [71-85]: Este es un premio clásico. La cantidad puede variar, pero un premio en efectivo es siempre atractivo porque el ganador puede usarlo como quiera.</li>
                    <li>GiftCards [50-70]: Las tarjetas de regalo son una excelente opción porque permiten al ganador elegir exactamente lo que quiere. Pueden ser de tiendas de ropa, restaurantes, tiendas de electrónica, etc.</li>
                    <li>No participa [1-49]: Lo sentimos.</li>
                </ol>
                <p className="text-lg font-sans text-gray-700">En caso de ser ganador porfavor dirijase a nuestros locales que aparecen en la pagina principal</p>
                <div className="text-lg font-bold font-sans md:text-xl text-green-600">Número seleccionado: {numero}</div>
                <div className="text-lg font-bold font-sans md:text-xl text-green-600">{mensaje}</div>
            </div>

            <FooterFunction />
        </>
    )
}