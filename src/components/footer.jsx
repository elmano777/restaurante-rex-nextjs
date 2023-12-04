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
import Link from "next/link";

export function FooterFunction() {
    return (
        <footer className="w-full h-auto bg-red-700 text-white">
            <div className="flex flex-col md:flex-row w-full h-auto">
                <div className="flex flex-col w-full md:w-1/4 h-auto m-12">
                    <div className="flex flex-grow items-center gap-2">
                        <BiDirections />
                        <p>Dirección</p>
                    </div>
                    <div className="flex flex-grow items-center gap-2">
                        <ImParagraphLeft />
                        <a href="https://www.google.com/maps/place/Jr.+Brigadier+Pumacahua+2321,+Lince+15073/@-12.0852695,-77.0459074,16.75z/data=!4m6!3m5!1s0x9105c8f7c6ae85b5:0xfd67280892345f00!8m2!3d-12.0850075!4d-77.0431089!16s%2Fg%2F11f12rm6mz?entry=ttu" target="_blank"
                            className="hover:text-yellow-400">
                            <p>Brigadier Pumacahua 2321</p>
                        </a>
                    </div>
                    <div className="flex flex-grow items-center gap-2">
                        <ImParagraphLeft />
                        <a href="https://www.google.com/maps/place/Jr.+Brigadier+Pumacahua+2318,+Lince+15073/@-12.0850052,-77.0458666,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c8f7c17a0c4d:0xbfa6d5e3afee1eef!8m2!3d-12.0850052!4d-77.0432863!16s%2Fg%2F11dzw7g4s4?entry=ttu" target="_blank"
                            className="hover:text-yellow-400">
                            <p>Brigadier Pumacahua 2318</p>
                        </a>
                    </div>
                    <div className="flex flex-grow items-center gap-2">
                        <ImParagraphLeft />
                        <a href="https://www.google.com/maps/place/Av.+Ignacio+Merino+2331,+Lince+15046/@-12.0869881,-77.0345678,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c8606aafceab:0xfd6329f60a747ede!8m2!3d-12.0869881!4d-77.0319875!16s%2Fg%2F11c5bkb5hd?entry=ttu" target="_blank"
                            className="hover:text-yellow-400">
                            <p>Ignacio Merino 2331</p>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-1/4 h-20 m-12">
                    <div className="flex flex-grow items-center gap-2">
                        <GrSchedules />
                        <p>Horarios</p>
                    </div>
                    <div className="flex flex-grow items-center gap-2">
                        <ImParagraphLeft />
                        <p>De Lunes a Domingo de 11:00 am a 8:00 pm</p>
                    </div>
                </div>
                <div className="flex flex-col w-full md:w-1/4 h-auto m-12">
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
                        <a href="mailto:contacto@cevicheriarex.com">contacto@cevicheriarex.com</a>
                    </div>
                    <Link href="/Politicas" className="flex flex-grow items-center gap-2">
                        <ImParagraphLeft />
                        <p>Política de privacidad</p>
                    </Link>
                    <div className="flex flex-grow items-center gap-2">
                        <ImParagraphLeft />
                        <a href="mailto:reclamos@cevicheriarex.com">reclamos@cevicheriarex.com</a>
                    </div>
                </div>
                    <address className="flex flex-col w-1/4 h-auto m-12">
                        <div className="bg-white h-auto w-auto my-4 rounded-full">
                            <Image src="/Images/rex-removebg-preview.png" alt="logo"
                                width={300} height={300}/>
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
                    <a href="https://www.facebook.com/cevicheriamariapastor/">
                        <AiFillFacebook className="w-12 h-12" />
                    </a>
                    <a href="mailto:contacto@cevicheriarex.com">
                        <AiOutlineMail className="w-12 h-12" />
                    </a>
                </div>
                <p className="flex flex-row items-center gap-2">
                    <AiFillCopyrightCircle />
                    Rex | Desarrollado por UTP Soluciones
                </p>
            </div>
        </footer>
    );
}
