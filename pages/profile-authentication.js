import React from "react";
import Head from "next/head";
import TopHeader from "../components/_App/TopHeader";
import { Button } from "react-bootstrap";
import Navbar from "../components/_App/Navbar";
import PageTitle from "../components/Common/PageTitle";
import Cookies from "universal-cookie";
import LoginForm from "../components/ProfileAuthentication/LoginForm";
import RegisterForm from "../components/ProfileAuthentication/RegisterForm";
import ProfileDetails from "../components/ProfileAuthentication/ProfileDetails";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/_App/Footer";
import metaData from "../public/metadata/myaccount.json";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
const ProfileAuthentication = ({ data }) => {
  const cookies = new Cookies();
  const auth = cookies.get("Auth");
  const name = cookies.get("name");
  const router = useRouter();
  const productSlug = router.query["product"];
  const isBuy = router.query["isBuy"] ? true : false;

  const route = () => {
    if (productSlug != undefined && isBuy != true) {
      router.push(`/signup?product=${productSlug}`);
    } else if (productSlug != undefined && isBuy) {
      router.push(`/signup?product=${productSlug}&isBuy=true`);
    } else {
      router.push("/signup");
    }
  };

  return (
    <>
      <style jsx>
        {`
          .btn {
            backgroundcolor: "#E0A801";
          }
          .btn:hover {
            background-color: red !important;
          }
        `}
      </style>
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
      </Head>
      <TopHeader />

      <Navbar />

      <PageTitle
        pageTitle={name != undefined ? name : "My Account"}
        homePageUrl="/"
        homePageText="Home"
        activePageText="My Account"
      />

      <div className="profile-authentication-area ptb-100">
        <div className="container">
          {auth != undefined ? (
            <div className="row">
              <ProfileDetails />
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <LoginForm />
                <div className="text-end mt-3" style={{ marginRight: "12px" }}>
                  <p role="button" onClick={route}>
                    New user? Register Now
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="mt-4 mt-sm-0">
                  <img src="/banner.webp" loading="lazy" alt="loginImage" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <SubscribeForm />

      <Footer />
    </>
  );
};

export default ProfileAuthentication;

export const getStaticProps = async () => {
  return {
    props: {
      data: metaData,
    },
  };
};
