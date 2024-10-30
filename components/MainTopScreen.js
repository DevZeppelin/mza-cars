import Image from "next/image";
import Link from "next/link";
import MainBarButton from "./MainBarButton";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const MainTopScreen = () => {
    return (
        <div className="flex bg-primary px-8 md:px-12 gap-4 justify-between">
            <Link href="/" >
                <Image src="/logo.png" width={400} height={400} alt="mza-cars-logo" className="animate-logo"/>
            </Link>
            <div className="hidden md:flex flex-col gap-4 my-auto text-lowContrast">
                <MainBarButton
                    logo={
                        <FaWhatsapp className="text-5xl flex my-auto m-2" />
                    }
                    text="Whatsapp, SMS o llamadas"
                    description2="2615 75 5056"
                    classType="text-navbar"
                />

                <MainBarButton
                    logo={
                        <FaMapMarkerAlt className="text-5xl flex my-auto m-2" />
                    }
                    text="Ubicación"
                    description2="Maza 51, Maipú, Mendoza"
                    classType="text-navbar"
                />
            </div>
        </div>
    )
}

export default MainTopScreen