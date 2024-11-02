import Head from "next/head";
import Layout from "../components/Layout";
import CustomButton from "../components/CustomButton";

export default function Index({ blogs }) {

  return (
    <div>
      <Head>
        <title>MZa Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="mt-16 mb-24 md:mb-48 text-center">
          <span className="my-auto">
            <p className="w-full mx-auto mb-8 md:w-1/2 text-2xl md:text-4xl italic px-8 md:px-0">
              Seleccionamos solo los mejores autos para ofrecer calidad y exclusividad en cada venta.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-0 md:mt-12 px-16">
              <CustomButton text="Autos y camionetas" href="/autos"/>
              <CustomButton text="Otros" href="/otros"/>
            </div>
          </span>


        </div>
      </Layout>
    </div>
  );
}
