import React from "react";
import Head from "next/head";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageTitle from "../components/Common/PageTitle";
import FaqContent from "../components/FAQ/FaqContent";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/_App/Footer";
import metaData from "../public/metadata/faq.json";
const FAQ = ({ data }) => {
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
        <meta property="og:title" content={data?.facebook?.title} />
        <meta property="og:site_name" content={data?.facebook?.site_name} />
        <meta property="og:description" content={data?.facebook?.description} />
        <meta property="og:image" content={data?.facebook?.image} />
        <meta property="og:image:width" content="715" />
        <meta property="og:image:height" content="402" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data?.twitter?.title} />
        <meta name="twitter:description" content={data?.twitter?.description} />
        <meta name="twitter:image" content={data?.twitter?.image} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How do I place an order for a t-shirt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can place an order by visiting our website and selecting the t-shirt(s) you wand proceed to checkout to purchase. Add the item(s) to your cart, provide your shipping and billing information and proceed to checkout.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long will it take to receive my t-shirt order?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The delivery time will depend on your location and the shipping method you choose during checkout. We typically provide estimated delivery times at the time of purchase.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is my payment information secure?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we take the security of your payment information seriously and use industry-standard encryption technologies to protect your data.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I pay for my SpicyWhips order?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SpicyWhips accepts all major credit cards and PayPal for online purchases.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I cancel my t-shirt order?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you may be able to cancel your order if it has not yet been processed or shipped. Please contact our customer service team as soon as possible to request a cancellation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does SpicyWhips offer returns or exchanges ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, SpicyWhips currently doesn't accepts returns and exchanges but will be",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will I receive a refund if I cancel my t-shirt order ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "If your t-shirt order has not yet been processed or shipped, you should receive a full refund for the purchase price.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is SpicyWhips?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SpicyWhips is a clothing brand that focuses on producing trendy and edgy clothes with a unique twist.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What type of clothing does SpicyWhips offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SpicyWhips offers a range of clothing items, including t- shirts, hoodies, sweatpants, shorts, and will soon provide accessories like hats and bags.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does SppicyWhips offer wholesale pricing for retailers?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, SpicyWhips offers wholesale pricing for retailers interested in carrying our products. Please contact us for more information.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do i connect SpicyWhips Customer Service?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can email us at support@spicywhips.com or fill out the contact form on our website.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <TopHeader />

      <Navbar />

      <PageTitle
        pageTitle="Frequently Asked Questions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQ"
      />

      <FaqContent />

      <SubscribeForm />

      <Footer />
    </>
  );
};

export default FAQ;

export const getStaticProps = async () => {
  return {
    props: {
      data: metaData,
    },
  };
};
