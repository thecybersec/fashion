import React from "react";
import Head from "next/head";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import PageTitle from "../../components/Common/PageTitle";
import BlogGrid from "../../components/Blog/BlogGrid";
import SubscribeForm from "../../components/Common/SubscribeForm";
import Footer from "../../components/_App/Footer";
import metaData from "../../public/metadata/blog.json";
import axios from "axios";

const Blog = ({ metadata }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={metadata?.canonical} />
        <meta charset="UTF-8" />
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata?.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Keywords" content={metadata?.keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata?.facebook?.url} />
        <meta property="og:title" content={metadata?.facebook?.title} />
        <meta property="og:site_name" content={metadata?.facebook?.site_name} />
        <meta
          property="og:description"
          content={metadata?.facebook?.description}
        />
        <meta property="og:image" content={metadata?.facebook?.image} />
        <meta property="og:image:width" content="715" />
        <meta property="og:image:height" content="402" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata?.twitter?.title} />
        <meta property="twitter:url" content={metadata?.twitter?.url} />
        <meta
          name="twitter:description"
          content={metadata?.twitter?.description}
        />
        <meta name="twitter:image" content={metadata?.twitter?.image} />
      </Head>
      <TopHeader />

      <Navbar />

      <PageTitle
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
      />

      <BlogGrid />

      <SubscribeForm />

      <Footer />
    </>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  return {
    props: {
      metadata: metaData,
    },
  };
};
