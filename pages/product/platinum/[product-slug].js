import React from "react";
import Head from "next/head";
import TopHeader from "../../../components/_App/TopHeader";
import Navbar from "../../../components/_App/Navbar";
import PageTitle from "../../../components/Common/PageTitle";
import ProductsDetailsPlatinumContent from "../../../components/ProductsDetails/ProductsDetailsPlatinumContent";
import SubscribeForm from "../../../components/Common/SubscribeForm";
import Footer from "../../../components/_App/Footer";
import metaData from "../../../public/metadata/goldplatinum.json";
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
const ProductsDetails = ({ data, details, metadata }) => {
  const router = useRouter();
  const id = router?.query["product-slug"];
  const title = details?.product?.name;
  const description = details?.product?.golddescription;
  const image = details?.product?.goldattributes[0]?.color[0]?.images[0]?.img;

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${metadata?.canonical}/platinum/${id}`} />
        <meta charset="UTF-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Keywords" content={metadata?.keywords} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${metadata?.facebook?.url}/platinum/${id}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={metadata?.facebook?.site_name} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="715" />
        <meta property="og:image:height" content="402" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          property="twitter:url"
          content={`${metadata?.twitter?.url}/platinum/${id}`}
        />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <TopHeader />

      <Navbar />

      {width > 520 ? (
        <PageTitle
          pageTitle="Products Details"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Products Details"
        />
      ) : (
        ""
      )}

      <ProductsDetailsPlatinumContent data={data?.product} />

      <SubscribeForm />

      <Footer />
    </>
  );
};

export default ProductsDetails;

export const getServerSideProps = async (context) => {
  const params = context.params["product-slug"];

  const response = await axios({
    method: "POST",
    url: "/api/product/getdetailMetaBySlug",
    data: {
      product_slug: params,
    },
  });

  const response2 = await axios({
    method: "POST",
    url: "/api/product/getdetailBySlug",
    data: {
      product_slug: params,
      user_id: "",
    },
  });

  return {
    props: {
      data: response2.data,
      details: response.data,
      metadata: metaData,
    },
  };
};
