import Link from "next/link";

export function CartaCardFunction({ imagen, descripcion, ruta }) {
    return (
        <>
            <Link href={`/${ruta}`}>
                <div className="relative mx-8 my-12 rounded-xl shadow-black shadow-2xl transition-transform duration-500 hover:scale-90">
                    <img src={imagen} alt={`Sección de ${descripcion}`} className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl " />
                    <p className="absolute bottom-1/4 w-full text-center text-white text-4xl">{descripcion}</p>
                </div>
            </Link>
        </>
    )
}
