import { BiDirections } from "react-icons/bi";
import { ImParagraphLeft } from "react-icons/im";
import { GrSchedules } from "react-icons/gr";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcDiscover } from "react-icons/fa";
import Image from "next/image";

export function FooterFunction() {
    return (
        <footer className="w-full h-auto bg-red-700 text-white">
            <div className="flex flex-col md:flex-row w-full h-auto">
                <div className="flex flex-col w-1/4 h-auto m-12">
                    <div className="flex flex-grow items-center gap-2">
                        <BiDirections />
                        <p>Dirección</p>
                    </div>
                    <div className="flex flex-grow items-center gap-2">
                        <ImParagraphLeft />
                        <p>Brigadier Pumacahua 2321</p>
                    </div>
                    <div className="flex flex-grow items-center gap-2">
                        <ImParagraphLeft />
                        <p>Brigadier Pumacahua 2318</p>
                    </div>
                    <div className="flex flex-grow items-center gap-2">
                        <ImParagraphLeft />
                        <p>Ignacio Merino 2331</p>
                    </div>
                    <div className="flex flex-grow items-center gap-2">
                        <ImParagraphLeft />
                        <p>Lince, Lima - altura de Canevaro cuadra 9</p>
                    </div>
                </div>
                <div className="flex flex-col w-1/4 h-20 m-12">
                    <div className="flex flex-grow items-center gap-2">
                        <GrSchedules />
                        <p>Horarios</p>
                    </div>
                    <div className="flex flex-grow items-center gap-2">
                        <ImParagraphLeft />
                        <p>De Lunes a Domingo de 11:00 am a 8:00 pm</p>
                    </div>
                </div>
                <div className="flex flex-col w-1/4 h-auto m-12">
                    <div className="flex flex-grow items-center gap-2">
                        <BiDirections />
                        <p>Contacto</p>
                    </div>
                    <div className="flex flex-grow items-center gap-2">
                        <ImParagraphLeft />
                        <p>(01) 266 - 0426</p>
                    </div>
                    <div className="flex flex-grow items-center gap-2">
                        <ImParagraphLeft />
                        <p>reservaciones@cevicheriarichards.com</p>
                    </div>
                    <div className="flex flex-grow items-center gap-2">
                        <ImParagraphLeft />
                        <p>Política de privacidad</p>
                    </div>
                    <div className="flex flex-grow items-center gap-2">
                        <ImParagraphLeft />
                        <p>Libro de Reclamaciones</p>
                    </div>
                </div>
                <address className="flex flex-col w-1/4 h-auto m-12">
                    <div className="bg-white h-auto w-auto my-4 rounded-full">
                        <Image src="/Images/rex-removebg-preview.png" alt="logo" 
                        width={300} height={300} />
                    </div>
                    <div className="flex flex-row h-auto">
                        <FaCcVisa className="w-1/4 h-8" />
                        <FaCcMastercard className="w-1/4 h-8" />
                        <SiAmericanexpress className="w-1/4 h-8" />
                        <FaCcDiscover className="w-1/4 h-8" />
                    </div>
                </address>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-auto gap-4">
                <div className="flex flex-row">
                    <AiFillFacebook className="w-12 h-12" />
                    <AiOutlineMail className="w-12 h-12" />
                </div>
                <p className="flex flex-row items-center gap-2">
                    <AiFillCopyrightCircle />
                    Richards | Desarrollado por Enfocus Soluciones
                </p>
            </div>
        </footer>
    );
}
