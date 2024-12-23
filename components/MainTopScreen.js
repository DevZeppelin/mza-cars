import Image from "next/image";
import Link from "next/link";
import MainBarButton from "./MainBarButton";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const MainTopScreen = () => {
    return (
        <div className="flex bg-gradient-to-b from-primary to-darkColor px-8 md:px-12 gap-4 justify-center md:justify-between">
            <Link href="/" >
                <Image src="/logo.png" width={400} height={400} alt="mza-cars-logo" className="animate-logo my-6 md:my-8  "/>
            </Link>
            <div className="hidden md:flex flex-col gap-4 my-auto">
                <MainBarButton
                    logo={
                        <FaWhatsapp className="text-5xl flex my-auto m-2" />
                    }
                    text="Whatsapp, SMS o llamadas"
                    description2="2615 75 5056"
                   
                />

                <MainBarButton
                    logo={
                        <FaMapMarkerAlt className="text-5xl flex my-auto m-2" />
                    }
                    text="Ubicación"
                    description2="Maza 51, Maipú, Mendoza"
                

                />
            </div>
        </div>
    )
}

export default MainTopScreen