import { Client } from "../../prismic-configuration";
import Layout from "../../components/Layout";
import Head from "next/head";
import SlugLayout from "../../components/SlugLayout";

export default function ArticleSlug({ article }) {
  return (
    <div>
      <Head>
        <title>Autos</title>
      </Head>
      <Layout>
        <SlugLayout article={article}/>
      </Layout>
    </div>
  );
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("car", context.query.car);

  return {
    props: {
      article: article,
    },
  };
}
