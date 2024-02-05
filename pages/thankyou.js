import React, { useEffect, useState } from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageTitle from "../components/Common/PageTitle";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import Cookies from "universal-cookie";
import Lottie from "react-lottie";
import animationData from "../lottie/thankyou.json";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
const Thankyou = () => {
  const router = useRouter();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    speed: 0.5,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  setTimeout(() => {
    router.push("/myorder");
  }, 8000);

  return (
    <>
      <TopHeader />
      <Navbar />
      <PageTitle
        pageTitle="Thankyou"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Thankyou"
      />

      <div
        className="d-flex justify-content-center mb-5"
        style={{ marginTop: "100px" }}
      >
        <div className="text-center">
          <Lottie options={defaultOptions} height={500} width={400} />
          <h1>Your order is placed!</h1>
          <Link href="/myorder">
            <a className="default-btn">
              <i class="fas fa-gift"></i>
              Go to my order
            </a>
          </Link>
        </div>
      </div>

      <SubscribeForm />

      <Footer />
    </>
  );
};

export default Thankyou;
