import { HeaderFunction } from "@/components/header"
import { FooterFunction } from "@/components/footer"
import { TituloFunction } from "@/components/titulo"

export default function RepartoPage() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Reparto Zonas"}/>
            <div className="flex justify-center my-12 mx-6">
                <iframe src="https://www.google.com/maps/d/embed?mid=1fW9zt5kHN1EHtiEBDIlyQJtRSL1IGKQ&ehbc=2E312F&noprof=1" width="1310" height="480"></iframe>
            </div>
            <FooterFunction />
        </>
    )
}