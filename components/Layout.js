import Footer from "./Footer";
import MainTopScreen from "./MainTopScreen";
import TopLeyend from "./TopLeyend";
import WhatsappIcon from "./WhatsappIcon";

export default function Layout({ children }) {

  return (
    <div className="bg-gradient-to-br from-background to-lowContrast">

      <TopLeyend />
      <MainTopScreen />
      <div className="text-textcolor">
        {children}
      </div>
      <Footer />
      <WhatsappIcon />

    </div>
  );
}