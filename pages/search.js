import React from "react";
import Head from "next/head";
import { Form, Button } from "react-bootstrap";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageTitle from "../components/Common/PageTitle";
import SubscribeForm from "../components/Common/SubscribeForm";
import setHeader from "../components/Hooks/axiosInstance";
import Footer from "../components/_App/Footer";
import Cookies from "universal-cookie";
import SkeletonLoader from "./skeleton";
import { useDispatch, useSelector } from "react-redux";
import GET_WISHLIST_LENGTH from "../components/Redux/Action/getwishlistlength.action";
import Link from "next/link";
import useAxios from "../components/Hooks/useAxios";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import metaData from "../public/metadata/search.json";
const Shop = ({ data }) => {
  // Start Set cookies in header
  axios.defaults.headers.common["Authorization"] = setHeader();
  //End Set Cookies in Header
  const [count, setCount] = useState();
  const [products, setProducts] = useState();
  const [indexed, setIndexed] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const [width, setWidth] = useState();
  const [number, setNumber] = useState(1);
  const cookies = new Cookies();
  const uid = cookies.get("pid");
  const params = router.asPath.slice(11);
  // Start Pagination Count
  const pageCount = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "api/product/paginationcount/",
        data: {
          query: params,
        },
      });
      setCount(response.data.pagination_count);
    } catch (err) {
      console.error(err);
    }
  };
  // End Pagination Count

  const getProduct = async (params) => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/product/searchweb/",
        data: {
          query: params,
        },
      });
      setProducts(response.data.Products);
    } catch (err) {
      console.log(err);
    }
  };

  // Start Pagination Count loop
  var pagesArray = [];
  for (var i = 1; i <= count; i++) {
    pagesArray.push(i);
  }
  // End  Pagination Count loop

  // Start Notification Code
  const Notification = (type) => {
    switch (type) {
      case "success":
        toast.success("Successfully add to wishlist !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
      case "error":
        toast.error("Login to add wishlist !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
    }
  };
  // End  Notification Code

  // Start code to add wishlist
  const addToWishlist = async (id) => {
    try {
      const response = await axios({
        method: "POST",
        url: "api/user/wishlist/add",
        data: {
          user_id: uid,
          product_id: id,
        },
      });
      Notification("success");
      dispatch(GET_WISHLIST_LENGTH(uid));
    } catch (err) {
      console.error(err);
      Notification("error");
    }
  };
  // End Code to add wishlist

  // Start get Product by clicking on pagination
  const getProductsByPagination = async (page_no) => {
    try {
      const response = await axios({
        method: "POST",
        url: "api/product/searchpaginationweb/",
        data: {
          pageno: page_no,
          query: params,
        },
      });
      setProducts(response.data.Products);
    } catch (err) {
      console.log(err);
    }
  };
  // End get Product by clicking on pagination

  const searchValue = (e) => {
    router.replace("search?q=" + e);
  };

  const ForwardBackward = () => {
    getProductsByPagination(number);
  };

  // For Pagination forward & backward
  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };
  // For Pagination forward & backward

  useEffect(() => {
    pageCount();
    // getProduct();
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    getProduct(params);
  }, [params]);

  useEffect(() => {
    ForwardBackward();
  }, [number]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${data?.canonical}${params}`} />
        <meta charset="UTF-8" />
        <title>{data?.title}</title>
        <meta name="description" content={data?.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Keywords" content={data?.keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${data?.facebook?.url}${params}`} />
        <meta property="og:title" content={data?.facebook?.title} />
        <meta property="og:site_name" content={data?.facebook?.site_name} />
        <meta property="og:description" content={data?.facebook?.description} />
        <meta property="og:image" content={data?.facebook?.image} />
        <meta property="og:image:width" content="715" />
        <meta property="og:image:height" content="402" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data?.twitter?.title} />
        <meta
          property="twitter:url"
          content={`${data?.twitter?.url}${params}`}
        />
        <meta name="twitter:description" content={data?.twitter?.description} />
        <meta name="twitter:image" content={data?.twitter?.image} />
      </Head>
      <TopHeader />

      <Navbar />

      {width > 520 ? (
        <PageTitle
          pageTitle="Search Products"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Search"
        />
      ) : (
        " "
      )}

      {width > 520 ? (
        " "
      ) : (
        <div className="option-item px-5 pt-5">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className=""
              aria-label="Search"
              onChange={(e) => searchValue(e.target.value)}
            />
          </Form>
        </div>
      )}

      <div className="products-area ptb-100">
        <div className="container">
          <div className="dravo-grid-sorting row align-items-center">
            <div className="col-lg-6 col-md-6 result-count">
              <div className="d-flex align-items-center">
                <p>
                  We found{" "}
                  <span className="count">{products && products.length}</span>{" "}
                  products available for you
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 ordering">
              {/* <div className="select-box">
                <label>Sort By:</label>
                <select>
                  <option>Default</option>
                  <option>Popularity</option>
                  <option>Latest</option>
                  <option>Price: low to high</option>
                  <option>Price: high to low</option>
                </select>
              </div> */}
            </div>
          </div>

          {products != undefined ? (
            <div className="row">
              {products &&
                products.map((items, index) => {
                  return (
                    <div
                      className="col-lg-3 col-md-6 col-sm-6 mb-3"
                      key={index}
                    >
                      <div className="single-products-box">
                        <Link href={`/product/gold/${items.slug}`}>
                          <a className="d-block">
                            <img
                              src={
                                items &&
                                items?.goldattributes[0] &&
                                items?.goldattributes[0]?.color[0] &&
                                items?.goldattributes[0]?.color[0]?.images[0] &&
                                items?.goldattributes[0]?.color[0]?.images[0]
                                  .img
                              }
                              alt="products-image"
                              loading="lazy"
                            />
                          </a>
                        </Link>
                        <ul className="products-button">
                          <li onClick={() => addToWishlist(items._id)}>
                            <a href="#">
                              <i className="far fa-heart"></i>
                              <span className="tooltip-label">
                                Add to Wishlist
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div
                        className="content p-2"
                        style={{
                          backgroundColor: "#f5f5f5",
                          marginTop: "-25px",
                        }}
                      >
                        <h6>
                          <Link href={`/product/gold/${items.slug}`}>
                            <a>{items && items.name}</a>
                          </Link>
                        </h6>
                        <div className="d-flex justify-content-between">
                          <div className="price">
                            <span className="new-price">
                              ₹
                              {
                                items?.goldattributes[0]?.color[0]?.fabric[0]
                                  ?.price
                              }
                            </span>
                          </div>
                          <Link href={`/product/gold/${items.slug}`}>
                            <a className="add-to-cart-btn">
                              View details <i className="fas fa-eye"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}

              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="pagination-area">
                  <div className="nav-links">
                    <a
                      role="button"
                      className="previous page-numbers"
                      title="Next Page"
                      onClick={decrement}
                    >
                      <i className="fas fa-arrow-left"></i>
                    </a>
                    {/* <span className="page-numbers current">1</span> */}
                    {pagesArray &&
                      pagesArray.map((index) => {
                        return (
                          <a
                            href="javascript:void(0)"
                            className="page-numbers"
                            onClick={() => {
                              getProductsByPagination(index);
                              setIndexed(index);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            key={index}
                            style={{ color: indexed == index ? "red" : "" }}
                          >
                            {index}
                          </a>
                        );
                      })}

                    <a
                      role="button"
                      className="next page-numbers"
                      title="Next Page"
                      onClick={increment}
                    >
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <SkeletonLoader />
          )}
        </div>
      </div>

      <SubscribeForm />

      <Footer />
      <ToastContainer />
    </>
  );
};

export default Shop;

export const getStaticProps = async () => {
  return {
    props: {
      data: metaData,
    },
  };
};
