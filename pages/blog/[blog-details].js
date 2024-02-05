import React from "react";
import Head from "next/head";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import BlogDetailsContent from "../../components/Blog/BlogDetailsContent";
import SubscribeForm from "../../components/Common/SubscribeForm";
import Footer from "../../components/_App/Footer";
import { useRouter } from "next/router";
import metaData from "../../public/metadata/blogdetails.json";
import axios from "axios";
const BlogDetails = ({ data, metadata }) => {
  const router = useRouter();
  const id = router.query["blog-details"];
  const title = data?.blog?.name;
  const description = data?.blog?.detail.slice(0, 300);
  const image = data?.blog?.blogThumbnail;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${metadata?.canonical}/${id}`} />
        <meta charset="UTF-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Keywords" content={metadata?.keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${metadata?.facebook?.url}/${id}`} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={data?.facebook?.site_name} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="715" />
        <meta property="og:image:height" content="402" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          property="twitter:url"
          content={`${metadata?.twitter?.url}/${id}`}
        />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <TopHeader />

      <Navbar />

      <BlogDetailsContent data={id} />

      <SubscribeForm />

      <Footer />
    </>
  );
};

export default BlogDetails;

export const getServerSideProps = async (context) => {
  const params = context.params["blog-details"];

  const response = await axios({
    method: "POST",
    url: "/api/blog/blogdetailslugmeta",
    data: {
      blog_slug: params,
    },
  });

  return {
    props: {
      data: response.data,
      metadata: metaData,
    },
  };
};
