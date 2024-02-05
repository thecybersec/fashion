import React from "react";
import Head from "next/head";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import FacilityStyleThree from "../components/Common/FacilityStyleThree";
import FeedbackStyleThree from "../components/Common/FeedbackStyleThree";
import Partners from "../components/Common/Partners";
import SubscribeFormStyleThree from "../components/Common/SubscribeFormStyleThree";
import Collection from "../components/Index3/Collection";
import HeroSlider from "../components/Index3/HeroSlider";
import TrendingProducts from "../components/Index3/TrendingProducts";
import FeaturedProductsTabs from "../components/Products/FeaturedProductsTabs";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import Footer from "../components/_App/Footer";
import axios from "axios";
import metaData from "../public/metadata/home.json";
import Script from "next/script";
const Index3 = ({ data }) => {
  return (
    <>
      <Script
        id="my-script1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-KL5LNQG`}
      />
      <Script id="my-script2" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GTM-KL5LNQG', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Script id="facebook-pixel">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', "3043889932580831");
        fbq('track', 'PageView');
      `}
      </Script>

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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@context": "https://schema.org/",
                  "@type": "WebSite",
                  name: "SpicyWhips",
                  url: "https://spicywhips.com/",
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://spicywhips.com/search/?q=all{search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <TopHeader />
      <Navbar />
      <HeroSlider />
      <Partners />
      <Collection />
      <FeaturedProductsTabs />
      <FacilityStyleThree />
      <hr />
      <TrendingProducts />
      <FeedbackStyleThree />
      <SubscribeFormStyleThree />
      <Footer />
    </>
  );
};

export default Index3;

export const getStaticProps = async () => {
  return {
    props: {
      data: metaData,
    },
  };
};
