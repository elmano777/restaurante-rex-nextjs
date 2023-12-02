import { HeaderFunction } from "@/components/header";
import { CartaCardFunction } from '@/components/pagefunction'
import { FooterFunction } from "@/components/footer"
import { TituloFunction } from "@/components/titulo"

export default function CartaPage() {
    return (
        <>
            <HeaderFunction />
            <TituloFunction titulo2={"Carta"} />
            <div className="grid grid-cols-3">
                <CartaCardFunction imagen="/Images/CartaLogos/CartaLogo1.jpg" descripcion={"Entradas"} ruta="Promociones/entradas" />
                <CartaCardFunction imagen="/Images/CartaLogos/CartaLogo2.jpg" descripcion={"Ceviches"} ruta="Promociones/ceviches" />
                <CartaCardFunction imagen="/Images/CartaLogos/CartaLogo3.jpg" descripcion={"Lenguado"} ruta="Promociones/lenguado" />
                <CartaCardFunction imagen="/Images/CartaLogos/CartaLogo4.jpg" descripcion={"Tiraditos"} ruta="Promociones/tiraditos" />
                <CartaCardFunction imagen="/Images/CartaLogos/CartaLogo5.jpg" descripcion={"Arroces"} ruta="Promociones/arroces" />
                <CartaCardFunction imagen="/Images/CartaLogos/CartaLogo6.jpg" descripcion=
                {"Tacu tacus"} ruta="Promociones/tacutacus" />
                <CartaCardFunction imagen="/Images/CartaLogos/CartaLogo7.jpg" descripcion={"Aguadito"} ruta="Promociones/aguadito" />
                <CartaCardFunction imagen="/Images/CartaLogos/CartaLogo8.jpg" descripcion={"Jaleas"} ruta="Promociones/jaleas" />
                <CartaCardFunction imagen="/Images/CartaLogos/CartaLogo10.jpg" descripcion={"Pescado Frito"} ruta="Promociones/pescadofrito" />
                <CartaCardFunction imagen="/Images/CartaLogos/CartaLogo11.jpg" descripcion={"Platos criollos"} ruta="Promociones/platoscriollos" />
                <CartaCardFunction imagen="/Images/CartaLogos/CartaLogo12.jpg" descripcion={"Pastas"} ruta="Promociones/pastas" />
                <CartaCardFunction imagen="/Images/CartaLogos/CartaLogo13.jpg" descripcion={"Chitas"} ruta="Promociones/chita" />
                <CartaCardFunction imagen="/Images/CartaLogos/CartaLogo14.png" descripcion={"Bebidas"} ruta="Promociones/bebidas" />
                <CartaCardFunction imagen="/Images/CartaLogos/CartaLogo15.jpg" descripcion={"GiftCards"} ruta="GiftCards" />
            </div>
            <FooterFunction />
        </>
    );
}
