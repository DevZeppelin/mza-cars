import Head from "next/head";
import Layout from "../../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../../prismic-configuration";
import BlogLayout from "../../components/BlogLayout";
import BackButton from "../../components/BackButton";

export default function Otros({ blogs }) {

  return (
    <div>
      <Head>
        <title>MZa Cars - Otros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <BlogLayout tag="car" title="Otros vehículos" blogs={blogs} />
        <BackButton/>
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.tags", ["otros"])
  );
  return {
    props: {
      blogs: blogs
    },
  };
}

