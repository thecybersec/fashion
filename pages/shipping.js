import React from "react";
import Head from "next/head";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageTitle from "../components/Common/PageTitle";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/_App/Footer";
import metaData from "../public/metadata/shipping.json";
const Shipping = ({ data }) => {
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
        pageTitle="Shipping"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Shipping"
      />

      <div className="shipping-area ptb-100">
        <div className="container">
          <div className="shipping-content">
            <h3>Shipping Information</h3>
            <p>Shop More. Save More.</p>
            <ul>
              <li>
                Shipping methods: We offer standard shipping, express shipping.
              </li>
              <li>
                Shipping rates: Our shipping rates vary based on the weight and
                destination of the package.
              </li>
              <li>
                Shipping times: Our standard shipping typically takes 5-8
                business days, express shipping takes 3-4 business days.
              </li>
              <li>
                Tracking: We provide a tracking number for every package
                shipped, which can be used to track the package online.
              </li>
              <li>
                Shipping restrictions: We ship to all India states and
                territories, but we do not ship internationally at this time.
              </li>
              <li>
                Delivery guarantees: We guarantee delivery within the timeframe
                specified for each shipping method. If your package does not
                arrive within the guaranteed timeframe, please contact us for
                assistance.
              </li>
              <li>
                Cash on Delivery (COD) is charged additionally at Rs. 50 for an
                order.
              </li>
              <li>
                Order processing time: Orders are typically processed within 1-2
                business days, and shipping times are in addition to the
                processing time.
              </li>
              <li>
                Returns: If you need to return an item, please see our return
                policy on our website for instructions on how to initiate a
                return. Shipping charges for returns are the responsibility of
                the customer.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <SubscribeForm />

      <Footer />
    </>
  );
};

export default Shipping;

export const getStaticProps = async () => {
  return {
    props: {
      data: metaData,
    },
  };
};
