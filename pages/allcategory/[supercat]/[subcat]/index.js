import React, { useEffect, useState } from "react";
import Head from "next/head";
import TopHeader from "../../../../components/_App/TopHeader";
import Navbar from "../../../../components/_App/Navbar";
import PageTitle from "../../../../components/Common/PageTitle";
import Sidebar from "../../../../components/Products/Sidebar";
import SubscribeForm from "../../../../components/Common/SubscribeForm";
import Footer from "../../../../components/_App/Footer";
import Allsubcategory from "../../../../components/Allcategory/Allsubcategory";
import ProductArticles from "../../../../components/ProductArticles/ProductArticles";
import { useRouter } from "next/router";
import axios from "axios";
import useAxios from "../../../../components/Hooks/useAxios";
const Shop = ({ data }) => {
  const [width, setWidth] = useState();
  const [subcatName, setSubcatName] = useState("....");
  const [content, setContent] = useState("");
  const router = useRouter();
  const supercat = router.query["supercat"];
  const subcat = router.query["subcat"];
  const categoryName = supercat?.replace(/^\w/, (c) => c.toUpperCase());

  const getSubcategoryName = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "api/subcategory/get/subcatslug",
        data: {
          subcatslug: subcat,
        },
      });

      {
        response.data.result.name != undefined
          ? setSubcatName(response.data.result.name)
          : "";
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getContent = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/subcategory/get/subcatslugcontent",
        data: {
          subcatslug: subcat,
        },
      });
      setContent(response.data.content);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    getSubcategoryName();
  }, [getSubcategoryName]);

  useEffect(() => {
    getContent();
  }, [subcat]);

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
          pageTitle={`${categoryName} | ${subcatName}`}
          homePageUrl="/"
          homePageText="Home"
          activePageText="Shop"
        />
      ) : (
        ""
      )}

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
              <Allsubcategory />
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
  const subCategory = params.subcat;

  const response = await axios({
    method: "POST",
    url: "https://spicywhips-backend-develop-gex9g.ondigitalocean.app/api/category/metacontent",
    data: {
      category: category,
      subcat: subCategory,
    },
  });

  return {
    props: {
      data: response.data.result,
    },
  };
};
