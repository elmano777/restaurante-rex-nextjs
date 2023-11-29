"use client";

import { useForm } from "react-hook-form"
import Image from "next/image";

export default function RegistroFunction() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        if (data.password !== data.confirmPassword) {
            return alert("oe cojudo tu contra no es la misma")
        }
        const res = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({
                username: data.username,
                password: data.password,
                email: data.email,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const resJSON = await res.json();
        console.log(resJSON)
    })
    console.log(errors)
    return (
        <div className="bg-blue-600 h-screen w-screen flex items-center justify-center">
            <form action="" onSubmit={onSubmit} className="h-auto w-auto flex justify-center items-center flex-col gap-6 bg-white px-24">
                <div className="flex relative w-48 h-48 items-center justify-center -mb-11">
                    <Image src="/Images/rex-removebg-preview.png" alt="logo" layout="fill" className=""></Image>
                </div>
                <h1 className="text-3xl font-mono">Registrarse</h1>
                <div className="grid grid-cols-2 gap-x-6 gap-y-12">
                    <div>
                        <input className="p-3 rounded block bg-slate-900 text-slate-300 w-52" type="text" {...register("username", { required: { value: true, message: "usuario requerido", } })} placeholder="Ingrese su Usuario" />
                        {errors.username && (<span className="text-red-500 h-4 block">{errors.username.message}</span>)}
                    </div>
                    <div>
                        <input className="p-3 rounded block bg-slate-900 text-slate-300 w-52" type="password" {...register("password", { required: { value: true, message: "contraseña requerido", } })} placeholder="Ingrese su contraseña" />
                        {errors.password && (<span className="text-red-500 h-4 block">{errors.password.message}</span>)}
                    </div>
                    <div>
                        <input className="p-3 rounded block bg-slate-900 text-slate-300 w-52" type="confirmPassword" {...register("confirmPassword", { required: { value: true, message: "confirmarcontraseña requerido", } })} placeholder="Confirmacion de contraseña" />
                        {errors.confirmPassword && (<span className="text-red-500 h-4 block">{errors.confirmPassword.message}</span>)}
                    </div>
                    <div>
                        <input className="p-3 rounded block bg-slate-900 text-slate-300 w-52" type="email"  {...register("email", { required: { value: true, message: "email requerido", } })} placeholder="Ingrese su email" />
                        {errors.email && (<span className="text-red-500 h-4 block">{errors.email.message}</span>)}
                    </div>
                </div>
                <button className="text-2xl mb-8 px-4 py-2 bg-black text-white rounded-xl">
                    Registrarse
                </button>
            </form>
        </div>
    )
}