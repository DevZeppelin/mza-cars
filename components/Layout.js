import Footer from "./Footer";
import MainTopScreen from "./MainTopScreen";
import TopLeyend from "./TopLeyend";
import WhatsappIcon from "./WhatsappIcon";

export default function Layout({ children }) {

  return (
    <div className="bg-lowContrast">
      <TopLeyend/>
      <MainTopScreen/>
      <div className="bg-lowContrast text-textcolor">
        {children}
      </div>
      <Footer />
      <WhatsappIcon/>

    </div>
  );
}