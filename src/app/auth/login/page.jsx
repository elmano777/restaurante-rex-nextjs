"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter()
    const [error, setError] = useState(null)
    const onSubmit = handleSubmit(async (data) => {
        console.log(data);

        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        console.log(res)
        if (res.error) {
            setError(<p>credenciales no existentes</p>)
        } else {
            router.push('/rifa')
            router.refresh()
        }
    });

    return (
        <div className="bg-blue-600 h-screen w-screen flex items-center justify-center">
            <form onSubmit={onSubmit} className="h-auto w-auto flex justify-center items-center flex-col gap-6 bg-white px-24">
                <div className="flex relative w-48 h-48 items-center justify-center -mb-11">
                    <Image src="/Images/rex-removebg-preview.png" alt="logo" layout="fill" className=""></Image>
                </div>
                {error && (
                    <p className="bg-blue-500 text-lg text-white p-3 rounded mb-2">{error}</p>
                )}

                <h1 className="text-slate-200 font-bold text-4xl mb-4">Login de la Rifa</h1>
                <input
                    type="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Email is required",
                        },
                    })}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    placeholder="user@email.com"
                />

                {errors.email && (
                    <span className="text-red-500 text-xs">{errors.email.message}</span>
                )}
                <input
                    type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Password is required",
                        },
                    })}
                    className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                    placeholder="******"
                />

                {errors.password && (
                    <span className="text-red-500 text-xs">
                        Contraseña
                    </span>
                )}
                <button className="w-full bg-blue-500 text-white p-3 rounded-lg">
                    Login
                </button>
                <Link href="/auth/register" className="w-80 text-center bg-red-500 text-white p-3 rounded-lg">
                    No tienes cuenta? Create una
                </Link>
                <Link href="/" className="w-80 text-center bg-yellow-500 text-white p-3 rounded-lg mb-4">
                    Regresar
                </Link>
            </form>
        </div>
    );
}
export default LoginPage;