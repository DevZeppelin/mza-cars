import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import MainBarButton from "./MainBarButton";


export default function Layout({ children }) {

  return (
    <div className="bg-lowContrast">
      <div className="flex bg-primary text-secundary px-8 md:px-12 gap-4 justify-between">
        <Link href="/" >
          <Image src="/logo.png" width={400} height={400} />
        </Link>
        <div className="hidden md:flex flex-col gap-4 my-auto">
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
                  text="Ubicaciòn"
                  description2="Maza 51, Maipú, Mendoza"
                  classType="text-navbar"
                />
        </div>
      </div>
      <div className="flex md:hidden flex-col my-auto">
            <MainBarButton
                  logo={
                    <FaWhatsapp className="text-5xl flex my-auto" />
                  }
                  text="Whatsapp, SMS o llamadas"
                  description2="2615 75 5056"
                  classType="text-navbar"
                />
            
            <MainBarButton
                  logo={
                    <FaMapMarkerAlt className="text-5xl flex my-auto" />
                  }
                  text="Ubicaciòn"
                  description2="Maza 51, Maipú, Mendoza"
                  classType="text-navbar"
                />
        </div>

      <div className="bg-lowContrast text-textcolor">
        {children}
      </div>

      <Footer />

    </div>
  );
}