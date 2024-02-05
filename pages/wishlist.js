import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../components/_App/Navbar";
import PageTitle from "../components/Common/PageTitle";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import axios from "axios";
import setHeader from "../components/Hooks/axiosInstance";
import Cookies from "universal-cookie";
import { BiRupee } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { CgScrollH } from "react-icons/cg";
import useAxios from "../components/Hooks/useAxios";
import GET_WISHLIST_LENGTH from "../components/Redux/Action/getwishlistlength.action";
import Lottie from "react-lottie";
import metaData from "../public/metadata/wishlist.json";
import animationData from "../lottie/wishlist.json";
import loaderData from "../lottie/loader.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
const Wishlist = ({ data }) => {
  // Start Set cookies in header
  axios.defaults.headers.common["Authorization"] = setHeader();
  //End Set Cookies in Header

  const [wishlistData, setWishlistData] = useState();
  const [show, setShow] = useState("none");
  const [width, setWidth] = useState();
  const [loaderShow, loaderSetShow] = useState("d-block");
  const cookies = new Cookies();
  const uid = cookies.get("pid");
  const dispatch = useDispatch();
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

  const loaderOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderData,
    speed: 0.5,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  setTimeout(() => {
    setShow("block");
    loaderSetShow("d-none");
  }, 1000);

  // Start Notification Code
  const Notification = (type) => {
    switch (type) {
      case "success":
        toast.success("Product Deleted !", {
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

  //   Start Getting All Product in Wishlist
  const getAllWishlist = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/user/getWishlistItems/${uid}`,
      });
      setWishlistData(response.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  //   End  Getting All Product in Wishlist

  //Start Remove product from Wishlist
  const deleteWishlist = async (id) => {
    try {
      const response = await axios({
        method: "POST",
        url: "api/user/wishlist/delete",
        data: {
          user_id: uid,
          product_id: id,
        },
      });
      Notification("success");
      getAllWishlist();
      dispatch(GET_WISHLIST_LENGTH(uid));
    } catch (err) {
      console.log(err);
    }
  };
  //End Remove product from Wishlist

  useEffect(() => {
    if (uid == undefined) {
      router.push("/profile-authentication");
    }
    getAllWishlist();
    setWidth(window.innerWidth);
    return () => {};
  }, []);

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
      <Navbar />

      <PageTitle
        pageTitle="Wishlist"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Wishlist"
      />

      {width < 520 ? (
        <div className="text-center text-danger mt-5">
          <CgScrollH style={{ fontSize: "16px", marginTop: "-2px" }} />
          <span>Scroll</span>
          <CgScrollH style={{ fontSize: "16px", marginTop: "-2px" }} />
        </div>
      ) : (
        ""
      )}

      {wishlistData && wishlistData.length != 0 ? (
        <div className="wishlist-area ptb-100" style={{ display: show }}>
          <div className="container">
            <form>
              <div className="wishlist-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Name</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Stock Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {wishlistData &&
                      wishlistData.map((items, index) => {
                        const slug =
                          items && items.product && items.product.slug;
                        const id = items && items.product && items.product._id;
                        return (
                          <tr key={index}>
                            <td className="product-thumbnail">
                              <Link href="#">
                                <a>
                                  <img
                                    src={
                                      items &&
                                      items.product &&
                                      items.product.goldattributes[0] &&
                                      items.product.goldattributes[0]
                                        .color[0] &&
                                      items.product.goldattributes[0].color[0]
                                        .images[0].img
                                    }
                                    alt="item"
                                  />
                                </a>
                              </Link>
                            </td>

                            <td className="product-name">
                              <Link href="#">
                                <a>
                                  {items && items.product && items.product.name}
                                </a>
                              </Link>
                            </td>

                            <td className="product-price">
                              <span className="unit-amount">
                                <BiRupee style={{ marginTop: "-3px" }} />
                                {items &&
                                  items.product &&
                                  items.product.goldattributes[0] &&
                                  items.product.goldattributes[0].color[0] &&
                                  items.product.goldattributes[0].color[0]
                                    .fabric[0].price}
                              </span>
                            </td>

                            {items &&
                            items.product &&
                            items.product.stockCount != 0 ? (
                              <td className="product-stock-status">
                                <span className="in-stock">
                                  <i className="fas fa-check-circle"></i> In
                                  Stock
                                </span>
                              </td>
                            ) : (
                              <td className="product-stock-status">
                                <span className="out-stock">
                                  <i className="fas fa-times"></i> Out of Stock
                                </span>
                              </td>
                            )}

                            <td className="product-subtotal d-flex">
                              <div className="mt-4">
                                <Link href={`product/gold/${slug}`}>
                                  <a className="default-btn">
                                    <i className="fas fa-eye"></i> VIEW
                                  </a>
                                </Link>
                              </div>
                              <div
                                onClick={() => {
                                  deleteWishlist(id);
                                }}
                                style={{ cursor: "pointer", marginTop: "35px" }}
                              >
                                <span className="remove ms-4">
                                  <i className="far fa-trash-alt"></i>
                                </span>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      ) : (
        <div className="mb-5" style={{ display: show }}>
          <Lottie options={defaultOptions} height={400} width={400} />
          <div className="text-center mt-3">
            <h4>Empty Wishlist</h4>
            <h6>You have no items in your wishlist. Start adding!</h6>

            <Link href="/">
              <a className="default-btn">
                <i class="fas fa-shopping-cart"></i>
                Shop Now
              </a>
            </Link>
          </div>
        </div>
      )}
      <div className={loaderShow} style={{ margin: "100px 0px" }}>
        <Lottie options={loaderOptions} height={400} width={400} />
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;

export const getStaticProps = async () => {
  return {
    props: {
      data: metaData,
    },
  };
};
