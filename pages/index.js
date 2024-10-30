import Head from "next/head";
import { FaAngleDoubleDown } from "react-icons/fa";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";
import { useState, useEffect } from 'react'
 

export default function Blog({blogs}) {

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  console.log(blogs.data)
  console.log(isClient ? 'This is never prerendered' : 'Prerendered')


  return (
    <div>
      <Head>
        <title>MZa Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="mt-16 mb-12 md:mb-48 text-center">
          <span className="my-auto">
            <p className="w-full mx-auto mb-8 md:w-1/2 text-2xl md:text-4xl">Seleccionamos solo los mejores autos para ofrecer calidad y exclusividad en cada venta.</p>
            <FaAngleDoubleDown className="mx-auto text-4xl mt-4"/>
          </span>
          

        </div>
          <BlogLayout tag="car" title="Autos en venta" blogs={blogs} />          
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
    const blogs = await Client().query(
      Prismic.Predicates.at("document.tags", ["car"])
      );     
    return {
      props: {
        blogs: blogs        
      },
    };
  }
 
