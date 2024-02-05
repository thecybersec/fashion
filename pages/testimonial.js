import React from "react";
import Head from "next/head";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageTitle from "../components/Common/PageTitle";
import Partners from "../components/Common/Partners";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/_App/Footer";
import metaData from "../public/metadata/testimonials.json";
import FeedbackStyleTwo from "../components/Common/FeedbackStyleTwo";
const About = ({ data }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={data?.canonical} />
        <meta charset="UTF-8" />
        <title>{data?.title}</title>
        <meta name="description" content={data?.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Keywords" content={data?.keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={data?.facebook?.url} />
        <meta property="og:title" content={data?.facebook?.title} />
        <meta property="og:site_name" content={data?.facebook?.site_name} />
        <meta property="og:description" content={data?.facebook?.description} />
        <meta property="og:image" content={data?.facebook?.image} />
        <meta property="og:image:width" content="715" />
        <meta property="og:image:height" content="402" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data?.twitter?.title} />
        <meta property="twitter:url" content={data?.twitter?.url} />
        <meta name="twitter:description" content={data?.twitter?.description} />
        <meta name="twitter:image" content={data?.twitter?.image} />
      </Head>
      <TopHeader />

      <Navbar />

      <PageTitle
        pageTitle="Customer Feedback"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Feedback"
      />

      <FeedbackStyleTwo />

      <Partners />

      <SubscribeForm />

      <Footer />
    </>
  );
};

export default About;

export const getStaticProps = async () => {
  return {
    props: {
      data: metaData,
    },
  };
};
