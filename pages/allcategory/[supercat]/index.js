import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Lottie from "react-lottie";
import { useRouter } from "next/router";
import TopHeader from "../../../components/_App/TopHeader";
import Navbar from "../../../components/_App/Navbar";
import PageTitle from "../../../components/Common/PageTitle";
import Sidebar from "../../../components/Products/Sidebar";
import SubscribeForm from "../../../components/Common/SubscribeForm";
import Footer from "../../../components/_App/Footer";
import Allcategory from "../../../components/Allcategory/Allcategory";
import commingSoon from "../../../lottie/commingsoon.json";
import ProductArticles from "../../../components/ProductArticles/ProductArticles";
import axios from "axios";
const Shop = ({ data }) => {
  const [width, setWidth] = useState();
  const router = useRouter();
  const supercat = router.query["supercat"];
  const [status, setStatus] = useState(true);
  const [content, setContent] = useState("");
  const categoryName = supercat.replace(/^\w/, (c) => c.toUpperCase());
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const getContent = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/subcategory/get/supercategoryslugcontent",
        data: {
          supercategoryslug: supercat,
        },
      });
      setContent(response.data.content);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    {
      supercat === "kids" || supercat === "casual-wear"
        ? setStatus(false)
        : setStatus(true);
    }

    getContent();
  }, [supercat]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: commingSoon,
    speed: 0.5,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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

      {width > 520 ? (
        <PageTitle
          pageTitle={`${categoryName} `}
          homePageUrl="/"
          homePageText="Home"
          activePageText="Shop"
        />
      ) : (
        ""
      )}

      {status ? (
        <div className="products-area ptb-100">
          <div className="container fluid">
            <div className="row">
              {width > 520 ? (
                <div className="col-lg-4 col-md-12">
                  <Sidebar />
                </div>
              ) : (
                ""
              )}
              <div className="col-lg-8 col-md-12">
                <Allcategory />
              </div>

              {width < 520 ? (
                <div className="col-lg-4 col-md-12">
                  <Sidebar />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="products-area ptb-100">
          <div className="mb-5">
            {width > 520 ? (
              <Lottie options={defaultOptions} height={400} width={400} />
            ) : (
              <Lottie options={defaultOptions} height={300} width={300} />
            )}

            <div className="text-center mt-3">
              {supercat != "Casual wear" ? (
                width > 520 ? (
                  <h4>Stay Tuned - Stylish Tees for your little ones</h4>
                ) : (
                  <h5>Stay Tuned - Stylish Tees for your little ones</h5>
                )
              ) : width > 520 ? (
                <h4>
                  Stay Tuned- the ultimate in casual wear for everyday life.
                </h4>
              ) : (
                <h5>
                  Stay Tuned- the ultimate in casual wear for everyday life.
                </h5>
              )}
              <Link href="/">
                <a className="default-btn">
                  <i class="fas fa-shopping-cart"></i>
                  Shop Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
      <ProductArticles content={content} />
      <SubscribeForm />

      <Footer />
    </>
  );
};

export default Shop;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const category = params.supercat;

  const response = await axios({
    method: "POST",
    url: "https://spicywhips-backend-develop-gex9g.ondigitalocean.app/api/category/metacontent",
    data: {
      category: category,
    },
  });

  return {
    props: {
      data: response.data.result,
    },
  };
};
