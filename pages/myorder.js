import React, { useEffect, useState } from "react";
import Head from "next/head";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageTitle from "../components/Common/PageTitle";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import useAxios from "../components/Hooks/useAxios";
import Cookies from "universal-cookie";
import setHeader from "../components/Hooks/axiosInstance";
import Lottie from "react-lottie";
import animationData from "../lottie/order.json";
import emptyOrderData from "../lottie/emptyorder.json";
import ReactStars from "react-rating-stars-component";
import loaderData from "../lottie/loader.json";
import metaData from "../public/metadata/myorder.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UncontrolledTabs from "react-tabs/lib/components/UncontrolledTabs";
const Order = ({ data }) => {
  // Start Set cookies in header
  axios.defaults.headers.common["Authorization"] = setHeader();
  //End Set Cookies in Header
  const [show, setShow] = useState("d-none");
  const [order, setOrder] = useState([]);
  const [visible, setVisible] = useState("none");
  const [loaderShow, loaderSetShow] = useState("d-block");
  const [ratingChanged, setRatingChanged] = useState("");
  const router = useRouter();
  const [review, setReview] = useState("");
  const [indexValue, setIndexValue] = useState();
  const cookies = new Cookies();
  const uid = cookies.get("pid");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    speed: 1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const emptyOrderOptions = {
    loop: true,
    autoplay: true,
    animationData: emptyOrderData,
    speed: 1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const loaderOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderData,
    speed: 0.5,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Start Notification Code
  const Notification = (type) => {
    switch (type) {
      case "success":
        toast.success("Thankyou for your review !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
      case "error":
        toast.error("Try Again !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
    }
  };
  // End  Notification Code

  const openClose = () => {
    {
      show === "d-none" ? setShow("d-block") : setShow("d-none");
    }
  };

  // Start GET My order
  const myorder = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/booking/getbooking",
        data: {
          user_id: uid,
        },
      });
      setOrder(response.data.resultPosts);
    } catch (err) {
      console.error(err);
    }
  };
  // End GET MY Order

  const postReview = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "api/booking/ratedelivery",
        data: {
          user_id: uid,
          booking_id: id,
          deliveryReview: `${review}`,
          deliveryExp: ratingChanged,
        },
      });
      setReview("");
      setShow("d-none");
      Notification("success");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (uid == undefined) {
      router.push("/profile-authentication");
    }
    myorder();
  }, []);

  setTimeout(() => {
    setVisible("block");
    loaderSetShow("d-none");
  }, 2000);

  return (
    <>
      <style jsx>{`
        .orderBtn {
          background-color: #f5f5f5f;
          border: 3px solid #d9d6d6;
          border-radius: 8px;
          width: 130px;
          text-align: center;
          font-size: 16px;
          padding: 3px 0px;
        }
        .orderBtn:hover {
          color: #cf0018;
        }
      `}</style>

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
        pageTitle="My Orders"
        homePageUrl="/"
        homePageText="Home"
        activePageText="My Orders"
      />

      <div style={{ display: visible }}>
        {order && order.length != 0 ? (
          <div className="cart-area ptb-100">
            <div className="container">
              <div className="row">
                {/* Start my order section */}
                <div className="col-lg-8 col-sm-12 col-md-12 ">
                  {order &&
                    order.map((items, index) => {
                      const id = items._id;
                      return (
                        <div className="mb-5" key={index}>
                          <div
                            className="row"
                            style={{ marginBottom: "-30px" }}
                          >
                            <div className="d-flex justify-content-between mb-5">
                              <div className="col-lg-10 col-sm-10 col-md-10">
                                <p style={{ lineHeight: "0.8px" }}>
                                  ORDER NUMBER
                                </p>
                                <p className="p-0">
                                  {items && items.transactionid}
                                </p>
                              </div>
                              <div className="col-lg-2 col-sm-2 col-md-2">
                                <Link href={`/orderdetails?id=${id}`}>
                                  <div className="orderBtn" role="button">
                                    Order Details
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12 col-sm-12 col-md-12">
                              <h6>
                                {items && items.cartId.length} Items ₹
                                {items && items.total}
                              </h6>
                              <span>Products in this order</span>
                              <div className="mt-2 mb-3">
                                {items &&
                                  items?.cartId?.map((data, index) => {
                                    const img = data?.cartId?.image;
                                    return (
                                      <img
                                        src={img}
                                        width="50"
                                        height="50"
                                        style={{ marginRight: "8px" }}
                                        key={index}
                                      />
                                    );
                                  })}
                              </div>
                            </div>

                            <div id="accordion">
                              <div className="card">
                                <div
                                  className="card-header d-flex justify-content-between"
                                  id="headingOne"
                                >
                                  <h6 className="mb-0">
                                    <button
                                      className="btn btn-link"
                                      aria-expanded="true"
                                      onClick={() => {
                                        openClose();
                                        setIndexValue(index);
                                      }}
                                      style={{
                                        boxShadow: "none",
                                        textDecoration: "none",
                                      }}
                                    >
                                      Rate Your Delivery Experience
                                    </button>
                                  </h6>
                                  <i
                                    className="fas fa-angle-right"
                                    style={{
                                      fontSize: "24px",
                                      marginTop: "8px",
                                    }}
                                  ></i>
                                </div>

                                <div
                                  id="collapseOne"
                                  className={
                                    index == indexValue ? show : "d-none"
                                  }
                                  aria-labelledby="headingOne"
                                  data-parent="#accordion"
                                >
                                  <div className="card-body">
                                    <div>
                                      <span>Rate & Review Products</span>
                                      <ReactStars
                                        count={5}
                                        onChange={(e) => setRatingChanged(e)}
                                        size={24}
                                        activeColor="#ffd700"
                                        isHalf={true}
                                      />
                                    </div>
                                    <div>
                                      <form onSubmit={(e) => postReview(e, id)}>
                                        <div className="form-group">
                                          <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            value={review}
                                            onChange={(e) =>
                                              setReview(e.target.value)
                                            }
                                          ></textarea>
                                        </div>
                                        <div className="text-end mt-3">
                                          <button className="btn-primary rounded">
                                            SUBMIT
                                          </button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
                {/* End my order section */}
                <div className="col-lg-4 col-sm-12 col-md-12">
                  <Lottie options={defaultOptions} height={400} width={350} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-5">
            <Lottie options={emptyOrderOptions} height={400} width={400} />

            <div className="text-center mt-3">
              <h4>You haven't placed any order yet!</h4>

              <Link href="/">
                <a className="default-btn">
                  <i className="fas fa-shopping-cart"></i>
                  Shop Now
                </a>
              </Link>
            </div>
          </div>
        )}{" "}
      </div>

      <div className={loaderShow} style={{ margin: "100px 0px" }}>
        <Lottie options={loaderOptions} height={400} width={400} />
      </div>
      <ToastContainer />
      <SubscribeForm />
      <Footer />
    </>
  );
};

export default Order;

export const getStaticProps = async () => {
  return {
    props: {
      data: metaData,
    },
  };
};
