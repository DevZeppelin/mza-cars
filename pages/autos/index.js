import Head from "next/head";
import Layout from "../../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../../prismic-configuration";
import BlogLayout from "../../components/BlogLayout";
import BackButton from "../../components/BackButton";

export default function Autos({ blogs }) {

  return (
    <div>
      <Head>
        <title>Mza Cars - Autos y camionetas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <BlogLayout tag="car" title="Autos y camionetas" blogs={blogs} />
        <BackButton/>
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

