import React from "react";
import Head from "next/head";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageTitle from "../components/Common/PageTitle";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/_App/Footer";
import metaData from "../public/metadata/return.json";

const DeliveryReturns = ({ data }) => {
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
        pageTitle="Delivery & Returns"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Delivery & Returns"
      />

      <div className="delivery-returns-area ptb-100">
        <div className="container">
          <div className="delivery-returns-content">
            <h3>Overview</h3>
            <p>
              We want you to be happy with your purchase and we apologize if it
              is not. For whatever reason that you are not satisfied, we would
              be most happy to provide exchanges for all items purchased from us
              if the following conditions are met within 3 days of date of
              delivery:
            </p>

            <p>
              You need to mail us at <strong>info@SpicyWhips.com</strong> with
              valid reason of exchange and images of the product stating the
              reason of exchange within 3 days of delivery All items must be in
              their original packaging with product tags intact All items must
              be unworn, unused, unwashed and in its original condition
              Originals receipts would need to be included.
            </p>

            <p>
              All items would need to be purchased originally from{" "}
              <strong>SpicyWhips</strong> If non of the above conditions are
              met, we regret to inform that we are unable to process any claims
              for exchanges or refund regardless that the items have been mailed
              back to us.
            </p>

            <p>
              Sales item(s) are non-exchangeable nor returnable on our online
              portal.
            </p>

            <p>
              If there is any issue in <strong>size</strong> ,{" "}
              <strong>quality</strong> , <strong>printing</strong> etc. are
              acceptable to return and exchange but not refunded. All exchanges
              are only valid for 3 calendar days from the time you receive the
              original order of goods.
            </p>

            <h3>Returns/Refunds are not acceptable</h3>
            <p>
              If there is any issue in <strong>size</strong> ,
              <strong>quality</strong> , <strong>printing</strong> etc. are we
              can exchange exchange the product but not refunded or return only
              if you mail us at <strong>info@SpicyWhips.com</strong> with valid
              reason of exchange and images of the product stating the reason of
              exchange within 3 days of delivery The terms and conditions on the
              website are constantly changed and updated without prior notice.
              You are recommended to review the site regularly for updates. It
              will be taken for granted for the consistent users & the ones that
              place an order with us, that they have accepted the terms &
              conditions along with the changes. We will contact you back via
              email for further information on returning the product.
            </p>

            <h3>Disclaimer :</h3>
            <p>
              Our customer care executives will never call you to ask your
              credit/debit card number, CVV number, OTP etc. We will never ask
              you your ATM pin or your online Password. We will never share your
              details with anyone, without your prior consent. By purchasing the
              product of SpicyWhips, you are fulfilling and agreeing to all the
              terms & conditions of SpicyWhips
            </p>
          </div>
        </div>
      </div>

      <SubscribeForm />

      <Footer />
    </>
  );
};

export default DeliveryReturns;

export const getStaticProps = async () => {
  return {
    props: {
      data: metaData,
    },
  };
};
