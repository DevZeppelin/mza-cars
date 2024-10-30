import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import MainBarButton from "./MainBarButton";


const Footer = () => {
  return (
    <div className="bg-primary text-white text-xl md:px-24 flex flex-col py-6 pt-8">
      <div
        id="contacto"
        className="flex flex-col md:flex-row space-y-4 text-base md:text-xl justify-between"
      >
        <div>
          <MainBarButton
            logo={
              <FaWhatsapp className="text-xl md:text-5xl flex my-auto" />
            }
            text="Whatsapp, SMS o llamadas"
            description2="2615 75 5056"
            classType="text-navbar"
          />

          <MainBarButton
            logo={
              <FaMapMarkerAlt className="text-xl md:text-5xl flex my-auto" />
            }
            text="Ubicación"
            description2="Maza 51, Maipú, Mendoza"
            classType="text-navbar"
          />
        </div>
        <div className="flex justify-center">
          <Link href="/" >
            <Image src="/logo.png" width={200} height={200} alt="mza-cars-logo" />
          </Link>
        </div>


      </div>
      <div className="text-sm max-w-2xl mt-8 p-4">
        Make in Mendoza, Argentina, by <a href="https://devzeppelin.com.ar" target="_blank">DevZeppelin</a> &copy; &nbsp;
        <p>{new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer