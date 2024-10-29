import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary text-white text-xl px-6 md:px-24 flex flex-col py-10 pt-8">
        <div
          id="contacto"
          className="flex space-x-5 md:space-x-10 text-2xl md:text-4xl justify-center"
        >
          <a
            href="https://api.whatsapp.com/send?phone=5492615755056"
            target="_blank"
            rel="noopener"
          >
            <button
              aria-label="go to my whatsapp"
              alt="whatsapp-logo"
            >
              <FaWhatsapp className="hover:text-green-700" />
            </button>
          </a>
          <a href="mailto:gino.b.pietrobon@gmail.com"
            target="_blank"
            rel="noopener">
            <button
              aria-label="send me a mail"
              alt="gmail-logo"
            >
              <FiMail className="hover:text-red-600" />
            </button>
          </a>
        </div>
        <div className="text-sm max-w-2xl">
          Make with &#128153; in Mendoza, Argentina, by <a href="https://devzeppelin.com.ar" target="_blank">DevZeppelin</a> All
          rights reserved. &copy; &nbsp; {new Date().getFullYear()}
        </div>
      </div>
  )
}

export default Footer