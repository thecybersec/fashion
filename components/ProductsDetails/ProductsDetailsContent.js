import React, { useEffect, useState, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";
import { Button, Modal } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
import { useRouter } from "next/router";
import { BiRupee } from "react-icons/bi";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import setHeader from "../Hooks/axiosInstance";
import ReactHtmlParser from "react-html-parser";
import { ToastContainer, toast } from "react-toastify";
import { BsPlayCircleFill } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import GET_WISHLIST_LENGTH from "../Redux/Action/getwishlistlength.action";
import GET_CART_LENGTH from "../Redux/Action/getcartlength.action";
import ReactStars from "react-rating-stars-component";
import Lottie from "react-lottie";
import animationData from "../../lottie/productDetailsLoader.json";
import InnerImageZoom from "custom-react-inner-image-zoom";
import "custom-react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const ProductsDetailsContent = ({ data }) => {
  // Start Set cookies in header
  axios.defaults.headers.common["Authorization"] = setHeader();
  //End Set Cookies in Header

  const dispatch = useDispatch();
  const cookies = new Cookies();
  const ref = useRef(null);
  const router = useRouter();
  const getProductSlug = router.query["product-slug"];

  const uid = cookies.get("pid");
  const [products, setProducts] = useState();
  const [sizeBorderColor, setSizeBorderColor] = useState("red");
  const [colorBorderColor, setColorBorderColor] = useState("red");
  const [fabricBorderColor, setFabricBorderColor] = useState("red");
  const [sizeIndex, setSizeIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [fabricIndex, setFabricIndex] = useState(0);
  const [updateSizeIndex, setUpdateSizeIndex] = useState(0);
  const [updateImageIndex, setUpdateImageIndex] = useState(0);
  const [updateColorIndex, setUpdateColorIndex] = useState(0);
  const [updateFabricIndex, setUpdateFabricIndex] = useState(0);
  const [checkIndexNumber, SetCheckIndexNumber] = useState();
  const [availableCart, setAvailableCart] = useState([]);
  const [review, setReview] = useState();
  const [reviewsComment, setReviewsComment] = useState([]);
  const [ratingChanged, setRatingChanged] = useState("");
  const [sizeChartImage, setSizeChartImage] = useState();
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(1);
  const getProductId = products && products._id;
  const productSlug = router.query["product-slug"];
  const Gold = router.asPath.split("/")[2];
  const [loader, setLoader] = useState(true);
  const [width, setWidth] = useState();
  const [showVideo, setShowVideo] = useState(false);
  const [ImgShow, setImgShow] = useState(false);
  const [reviewImage, setReviewImage] = useState();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    speed: 0.5,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const goldPrinter = products?.goldprinter;
  const SKU = products?.category?._id.slice(0, 6);
  const Specifications = products?.goldspecification;
  const additional_information = products?.golddetails;
  const description = products?.golddescription;
  const videoLink = products?.goldattributes[0]?.color[0]?.video;
  const reviewLength = products?.reviews?.length;
  // Start For Add to Cart
  const name = products && products.name;
  const categoryName = products?.category?.name;
  const categoryId = products?.subcategory;

  const price =
    products &&
    products.goldattributes[updateSizeIndex].color[updateColorIndex] &&
    products &&
    products.goldattributes[updateSizeIndex].color[updateColorIndex].fabric[
      updateFabricIndex
    ] != undefined
      ? products.goldattributes[updateSizeIndex].color[updateColorIndex].fabric[
          updateFabricIndex
        ].price
      : products &&
        products.goldattributes[0] &&
        products.goldattributes[0].color[0].fabric[0].price;

  const size =
    products &&
    products.goldattributes[updateSizeIndex].color[updateColorIndex] !=
      undefined
      ? products.goldattributes[updateSizeIndex].title
      : products &&
        products.goldattributes[0] &&
        products.goldattributes[0].title;

  const color =
    products &&
    products.goldattributes[updateSizeIndex].color[updateColorIndex] &&
    products &&
    products.goldattributes[updateSizeIndex].color[updateColorIndex] !=
      undefined
      ? products.goldattributes[updateSizeIndex].color[updateColorIndex]
          .colorCode
      : products &&
        products.goldattributes[0] &&
        products.goldattributes[0].color[0].colorCode;

  const fabric =
    products &&
    products.goldattributes[updateSizeIndex].color[updateColorIndex] &&
    products &&
    products.goldattributes[updateSizeIndex].color[updateColorIndex].fabric[
      updateFabricIndex
    ] != undefined
      ? products.goldattributes[updateSizeIndex].color[updateColorIndex].fabric[
          updateFabricIndex
        ].fabricName
      : products &&
        products.goldattributes[0] &&
        products.goldattributes[0].color[0].fabric[0].fabricName;

  const mrp =
    products &&
    products.goldattributes[updateSizeIndex].color[updateColorIndex] &&
    products &&
    products.goldattributes[updateSizeIndex].color[updateColorIndex].fabric[
      updateFabricIndex
    ] != undefined
      ? products.goldattributes[updateSizeIndex].color[updateColorIndex].fabric[
          updateFabricIndex
        ].mrp
      : products &&
        products.goldattributes[0] &&
        products.goldattributes[0].color[0].fabric[0].mrp;

  const image =
    products &&
    products.goldattributes[updateSizeIndex] &&
    products.goldattributes[updateSizeIndex] &&
    products &&
    products.goldattributes[updateSizeIndex] &&
    products.goldattributes[updateSizeIndex].color[updateColorIndex] &&
    products &&
    products.goldattributes[updateSizeIndex] &&
    products.goldattributes[updateSizeIndex].color[updateColorIndex].images[
      updateImageIndex
    ] != undefined
      ? products &&
        products.goldattributes[updateSizeIndex] &&
        products.goldattributes[updateSizeIndex].color[updateColorIndex].images[
          updateImageIndex
        ].img
      : products &&
        products.goldattributes[updateSizeIndex] &&
        products.goldattributes[updateSizeIndex].color[0].images[0].img;
  // End For Add to Cart

  // Start Size Chart Image Call API
  const SizeChart = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "api/category/sizechart",
        data: {
          subcategory_id: categoryId,
        },
      });
      setSizeChartImage(response.data.sizechart);
    } catch (err) {
      console.error(err);
    }
  };

  // End Szie Chart Image Call API

  // Start Getting Product Details
  const ProductsDetails = () => {
    const data = {
      product_slug: getProductSlug,
      user_id: "",
    };
    axios
      .post("/api/product/getdetailBySlugNew", data)
      .then((response) => {
        setProducts(response.data.product);
        setReview(response.data.avg_review);
        setReviewsComment(response.data.reviews);
      })
      .catch((err) => console.error(err.response));
  };
  useEffect(() => {
    if (getProductSlug != undefined) {
      ProductsDetails();
    }
  }, [getProductSlug]);
  // End Getting Product Details

  // Start Add to wishlist
  const AddToWishlist = async () => {
    const product_id = products._id;
    try {
      const response = await axios({
        method: "POST",
        url: "api/user/wishlist/add",
        data: {
          user_id: uid,
          product_id: product_id,
        },
      });
      Notification("success");
      dispatch(GET_WISHLIST_LENGTH(uid));
    } catch (err) {
      console.error(err);
      Notification("error");
    }
  };
  // End Add to wishlist

  // Start Notification Code
  const Notification = (type) => {
    switch (type) {
      case "success":
        toast.success("Successfully added to wishlist !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
      case "cartSuccess":
        toast.success("Successfully added to Cart !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
      case "error":
        toast.error("Please Login First", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
    }
  };
  // End  Notification Code

  // Start Counter Coding
  let incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter < 1) {
    setCounter(1);
  }
  // End Counter Coding
  // Start Add to Cart Coding
  const addToCart = async (isBuy) => {
    const data = {
      user_id: uid,
      name: name,
      image: image,
      product_id: getProductId,
      price: price,
      mrp: mrp,
      size: size,
      color: color,
      fabric: fabric,
      quantity: counter,
      product_type: "gold",
      printer_id: goldPrinter,
      isBuy: isBuy,
    };

    try {
      const response = await axios({
        method: "POST",
        url: "/api/user/cart/addtocart",
        data: data,
      });
      Notification("cartSuccess");
      dispatch(GET_CART_LENGTH(uid));
      CheckCart();
      DataLayer();
      {
        isBuy ? router.push("/add-address?isBuy=true") : "";
      }
    } catch (err) {
      console.log(err);
      {
        isBuy
          ? router.push(
              `/profile-authentication?product=${productSlug}&isBuy=true`
            )
          : router.push(`/profile-authentication?product=${productSlug}`);
      }
      window.sessionStorage.setItem("name", name);
      window.sessionStorage.setItem("image", image);
      window.sessionStorage.setItem("product_id", getProductId);
      window.sessionStorage.setItem("price", price);
      window.sessionStorage.setItem("mrp", mrp);
      window.sessionStorage.setItem("size", size);
      window.sessionStorage.setItem("color", color);
      window.sessionStorage.setItem("fabric", fabric);
      window.sessionStorage.setItem("quantity", counter);
      window.sessionStorage.setItem("product_type", "gold");
      window.sessionStorage.setItem("printer_id", goldPrinter);
    }
  };
  // End Add to Cart Coding

  // Start DataLayer Coding
  const DataLayer = () => {
    // Load GTM script
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-KL5LNQG");

    // Define and push the ecommerce data layer variables
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "add_to_cart",
      items: [
        {
          item_id: `sku${SKU} `,
          item_name: name,
          item_category: "Gold",
          item_category1: categoryName,
          item_variant: color,
          price: price,
          quantity: counter,
        },
      ],
    });
  };
  // End DataLayer Coding

  //  Start Check cart product is available or not
  const CheckCart = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `api/user/checkCartItems/${uid}`,
      });
      setAvailableCart(response.data.result);
    } catch (err) {
      console.error(err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  useEffect(() => {
    CheckCart();
    SetCheckIndexNumber(0);
    setWidth(window.innerWidth);
    SizeChart();
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  useEffect(() => {
    SizeChart();
  }, [categoryId]);

  // Start Google Ecommarce Tracking
  // useEffect(() => {
  //   if (name && SKU && categoryName !== undefined) {
  //     // Load GTM script
  //     (function (w, d, s, l, i) {
  //       w[l] = w[l] || [];
  //       w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  //       var f = d.getElementsByTagName(s)[0],
  //         j = d.createElement(s),
  //         dl = l != "dataLayer" ? "&l=" + l : "";
  //       j.async = true;
  //       j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  //       f.parentNode.insertBefore(j, f);
  //     })(window, document, "script", "dataLayer", "GTM-KL5LNQG");

  //     // Define and push the ecommerce data layer variables
  //     window.dataLayer = window.dataLayer || [];
  //     window.dataLayer.push({
  //       event: "view_item",
  //       ecommerce: {
  //         items: [
  //           {
  //             item_id: `sku${SKU} `,
  //             item_name: name,
  //             item_category: "Gold",
  //             item_category1: categoryName,
  //             item_variant: color,
  //             price: price,
  //             quantity: counter,
  //           },
  //         ],
  //       },
  //     });
  //   }
  // }, [name, SKU, categoryName]);
  //End Google Ecommarce Tracking

  return (
    <>
      <style jsx>
        {`
          .size {
            list-style: none;
            display: flex;
          }
          .size li {
            border: 1px solid #ccc;
            margin-right: 20px;
            padding: 0px 7px;
            cursor: pointer;
          }
          .size li:hover {
            border-color: red;
          }

          .colors {
            list-style: none;
            display: flex;
          }
          .colors li {
            border: 1px solid #ccc;
            width: 20px;
            height: 20px;
            margin-right: 20px;
            padding: 10px;
            cursor: pointer;
          }
          .colors li:hover {
            border-color: red;
          }

          .fabric {
            list-style: none;
            display: flex;
          }

          .fabric li {
            border: 1px solid #ccc;
            margin-right: 20px;
            padding: 2px 10px;
            cursor: pointer;
          }

          .fabric li:hover {
            border-color: red;
          }

          .miniImage {
            display: none;
          }

          .miniImageDesktop {
            display: block;
          }

          @media (max-width: 768px) {
            .miniImage {
              display: block;
            }

            .miniImageDesktop {
              display: none;
            }
          }
        `}
      </style>

      {loader ? (
        width >= 520 ? (
          <Lottie options={defaultOptions} height={600} width={600} />
        ) : (
          <Lottie options={defaultOptions} height={350} width={300} />
        )
      ) : (
        <div className="products-details-area ptb-100">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-1"></div>
              {/* start small size image for Desktop */}
              <div
                className="col-lg-1 pointer miniImageDesktop"
                role="button"
                style={{ marginTop: "-100px" }}
              >
                {products &&
                products.goldattributes &&
                products.goldattributes[updateSizeIndex].color[
                  updateColorIndex
                ] != undefined
                  ? products &&
                    products.goldattributes &&
                    products.goldattributes[updateSizeIndex].color[
                      updateColorIndex
                    ].images.map((items, index) => {
                      return (
                        <div
                          className="mb-2"
                          style={{
                            width: index == checkIndexNumber ? "60px" : "63px",
                            border:
                              index == checkIndexNumber
                                ? "2px solid #e60000"
                                : "",
                          }}
                          key={index}
                          onMouseOver={() => {
                            setUpdateImageIndex(index);
                            SetCheckIndexNumber(index);
                            setShowVideo(false);
                          }}
                        >
                          <img src={items && items.img} />
                        </div>
                      );
                    })
                  : products &&
                    products.goldattributes &&
                    products.goldattributes[0].color[0].images.map(
                      (items, index) => {
                        return (
                          <div
                            className="mb-4"
                            style={{
                              width: "63px",
                              height: "63px",
                            }}
                            key={index}
                            onMouseOver={() => {
                              setUpdateImageIndex(index);
                            }}
                          >
                            <img src={items && items.img} />
                          </div>
                        );
                      }
                    )}
                {/* Start  image with video tag */}

                {videoLink !== "" && videoLink !== undefined ? (
                  <div
                    className="mb-4 position-relative"
                    style={{
                      width: showVideo ? "60px" : "63px",
                      height: "75px",
                      border: showVideo ? "2px solid #e60000" : "",
                    }}
                    onMouseOver={() => {
                      setShowVideo(true);
                      SetCheckIndexNumber(10);
                    }}
                  >
                    <img src={image} />
                    <BsPlayCircleFill
                      className="position-absolute"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "30px",
                      }}
                    />
                  </div>
                ) : (
                  ""
                )}

                {/* End  image with video tag */}
              </div>
              {/* End small size image for Desktop */}

              <div className="col-lg-4 col-md-12">
                <div className="products-details-image">
                  {showVideo ? (
                    <iframe
                      width="100%"
                      height="620"
                      src={videoLink}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  ) : (
                    <InnerImageZoom
                      src={
                        products &&
                        products.goldattributes[updateSizeIndex] &&
                        products.goldattributes[updateSizeIndex] &&
                        products &&
                        products.goldattributes[updateSizeIndex] &&
                        products.goldattributes[updateSizeIndex].color[
                          updateColorIndex
                        ] &&
                        products &&
                        products.goldattributes[updateSizeIndex] &&
                        products.goldattributes[updateSizeIndex].color[
                          updateColorIndex
                        ].images[updateImageIndex] != undefined
                          ? products &&
                            products.goldattributes[updateSizeIndex] &&
                            products.goldattributes[updateSizeIndex].color[
                              updateColorIndex
                            ].images[updateImageIndex].img
                          : products &&
                            products.goldattributes[updateSizeIndex] &&
                            products.goldattributes[updateSizeIndex].color[0]
                              .images[0].img
                      }
                      zoomSrc={
                        products &&
                        products.goldattributes[updateSizeIndex] &&
                        products.goldattributes[updateSizeIndex] &&
                        products &&
                        products.goldattributes[updateSizeIndex] &&
                        products.goldattributes[updateSizeIndex].color[
                          updateColorIndex
                        ] &&
                        products &&
                        products.goldattributes[updateSizeIndex] &&
                        products.goldattributes[updateSizeIndex].color[
                          updateColorIndex
                        ].images[updateImageIndex] != undefined
                          ? products &&
                            products.goldattributes[updateSizeIndex] &&
                            products.goldattributes[updateSizeIndex].color[
                              updateColorIndex
                            ].images[updateImageIndex].img
                          : products &&
                            products.goldattributes[updateSizeIndex] &&
                            products.goldattributes[updateSizeIndex].color[0]
                              .images[0].img
                      }
                      zoomType="hover"
                      alt="products-image"
                    />
                  )}
                </div>
              </div>

              {/* start small size image for mobile */}
              <div className="miniImage">
                <div className="col-lg-1 pointer d-flex" role="button">
                  {products &&
                  products.goldattributes &&
                  products.goldattributes[updateSizeIndex].color[
                    updateColorIndex
                  ] != undefined
                    ? products &&
                      products.goldattributes &&
                      products.goldattributes[updateSizeIndex].color[
                        updateColorIndex
                      ].images.map((items, index) => {
                        return (
                          <div
                            className="mx-2 my-3"
                            style={{
                              width:
                                index == checkIndexNumber ? "60px" : "63px",
                              border:
                                index == checkIndexNumber
                                  ? "2px solid #e60000"
                                  : "",
                            }}
                            key={index}
                            onMouseOver={() => {
                              setUpdateImageIndex(index);
                              SetCheckIndexNumber(index);
                              setShowVideo(false);
                            }}
                          >
                            <img src={items && items.img} />
                          </div>
                        );
                      })
                    : products &&
                      products.goldattributes &&
                      products.goldattributes[0].color[0].images.map(
                        (items, index) => {
                          return (
                            <div
                              className="mb-4"
                              style={{
                                width: "63px",
                                height: "63px",
                              }}
                              key={index}
                              onMouseOver={() => {
                                setUpdateImageIndex(index);
                              }}
                            >
                              <img src={items && items.img} />
                            </div>
                          );
                        }
                      )}

                  {/* Start  image with video tag */}

                  {videoLink !== "" && videoLink !== undefined ? (
                    <div
                      className="my-3 position-relative"
                      style={{
                        width: showVideo ? "60px" : "63px",
                        height: "75px",
                        border: showVideo ? "2px solid #e60000" : "",
                      }}
                      onMouseOver={() => {
                        setShowVideo(true);
                        SetCheckIndexNumber(10);
                      }}
                    >
                      <img src={image} />
                      <BsPlayCircleFill
                        className="position-absolute"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          fontSize: "35px",
                        }}
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  {/* End  image with video tag */}
                </div>
              </div>
              {/* End small size image for mobile */}

              <div className="col-lg-5 col-md-12">
                <div className="products-details-desc">
                  <h3>{products && products.name}</h3>

                  <div className="price">
                    <span className="new-price">
                      <BiRupee style={{ marginTop: "-4px" }} />
                      {products &&
                      products.goldattributes[updateSizeIndex].color[
                        updateColorIndex
                      ] &&
                      products &&
                      products.goldattributes[updateSizeIndex].color[
                        updateColorIndex
                      ].fabric[updateFabricIndex] != undefined
                        ? products.goldattributes[updateSizeIndex].color[
                            updateColorIndex
                          ].fabric[updateFabricIndex].price
                        : products &&
                          products.goldattributes[0] &&
                          products.goldattributes[0].color[0].fabric[0].price}
                    </span>
                    <span className="mrp-price">
                      <del>
                        <BiRupee
                          style={{ marginTop: "-4px", marginLeft: "5px" }}
                        />
                        {products &&
                        products.goldattributes[updateSizeIndex].color[
                          updateColorIndex
                        ] &&
                        products &&
                        products.goldattributes[updateSizeIndex].color[
                          updateColorIndex
                        ].fabric[updateFabricIndex] != undefined
                          ? products.goldattributes[updateSizeIndex].color[
                              updateColorIndex
                            ].fabric[updateFabricIndex].mrp
                          : products &&
                            products.goldattributes[0] &&
                            products.goldattributes[0].color[0].fabric[0].mrp}
                      </del>
                    </span>
                  </div>

                  <div className="products-review d-flex">
                    <div className="rating">
                      <ReactStars
                        count={5}
                        value={review}
                        size="5px"
                        activeColor="#ffd700"
                        isHalf={true}
                        edit={false}
                      />
                    </div>
                    <div>{reviewsComment?.length} reviews</div>
                  </div>
                  <p>
                    <p>{ReactHtmlParser(description)}</p>
                  </p>

                  <ul className="products-info mb-2">
                    <li>
                      <span>SKU:</span> sku{SKU}
                    </li>
                    <li>
                      <span>Category:</span> {categoryName}
                    </li>
                    {/* <li>
                    <span>Availability:</span> In stock (
                    {products &&
                    products.goldattributes[updateSizeIndex].color[
                      updateColorIndex
                    ] &&
                    products &&
                    products.goldattributes[updateSizeIndex].color[
                      updateColorIndex
                    ].fabric[updateFabricIndex] != undefined
                      ? products.goldattributes[updateSizeIndex].color[
                          updateColorIndex
                        ].fabric[updateFabricIndex].stock
                      : products &&
                        products.goldattributes[0] &&
                        products.goldattributes[0].color[0].fabric[0]
                          .stock}{" "}
                    items)
                  </li> */}
                    {/* <li>
                    <span>Type:</span> <Link href="#">Hoodie</Link>
                  </li> */}

                    <li>
                      <Link href="/delivery-returns">Delivery & return</Link>
                    </li>
                  </ul>
                  <div className="products-size d-flex">
                    <span>Size:</span>
                    <ul className="size">
                      {products &&
                        products.goldattributes &&
                        products.goldattributes.map((items, index) => {
                          return (
                            <li
                              key={index}
                              onClick={() => {
                                setUpdateSizeIndex(index);
                                setSizeIndex(index);
                                setUpdateColorIndex(0);
                              }}
                              style={{
                                borderColor:
                                  sizeIndex == index ? sizeBorderColor : "",
                              }}
                            >
                              {items.title}
                            </li>
                          );
                        })}
                    </ul>
                    <span
                      className=""
                      role="button"
                      onClick={() => setShow(!show)}
                    >
                      <span className="text-info">Size Chart </span>
                      <img
                        src="/images/sizechart.svg"
                        width="50"
                        style={{ marginLeft: "5px" }}
                      />
                    </span>
                  </div>

                  <div className="products-color">
                    <span>Colors:</span>
                    <ul className="colors">
                      {products &&
                        products.goldattributes[updateSizeIndex] &&
                        products.goldattributes[updateSizeIndex].color.map(
                          (items, index) => {
                            return (
                              <li
                                style={{
                                  backgroundColor: `${items.colorCode}`,
                                  borderColor:
                                    colorIndex == index ? colorBorderColor : "",
                                }}
                                onClick={() => {
                                  setUpdateColorIndex(index);
                                  setColorIndex(index);
                                  scrollToTop();
                                }}
                                key={index}
                              />
                            );
                          }
                        )}
                    </ul>
                  </div>
                  <div className="products-fabric">
                    <span>Fabric:</span>
                    <ul className="fabric">
                      {products &&
                      products.goldattributes[updateSizeIndex] &&
                      products.goldattributes[updateSizeIndex].color[
                        updateColorIndex
                      ] != undefined
                        ? products &&
                          products.goldattributes[updateSizeIndex] &&
                          products.goldattributes[updateSizeIndex].color[
                            updateColorIndex
                          ].fabric.map((items, index) => {
                            return (
                              <li
                                key={index}
                                onClick={() => {
                                  setUpdateFabricIndex(index);
                                  setFabricIndex(index);
                                }}
                                style={{
                                  borderColor:
                                    fabricIndex == index
                                      ? fabricBorderColor
                                      : "",
                                }}
                              >
                                {items.fabricName}
                              </li>
                            );
                          })
                        : products &&
                          products.goldattributes[updateSizeIndex] &&
                          products.goldattributes[
                            updateSizeIndex
                          ].color[0].fabric.map((items, index) => {
                            return <li key={index}>{items.fabricName}</li>;
                          })}
                    </ul>
                  </div>
                  {/* <div className="products-fabric">
                    <span>Select Segment:</span>
                    <div ref={ref}>
                      <Button
                        style={{
                          backgroundColor: "#d4af37",
                          color: "#000",
                          borderColor: `${Gold}` == "gold" ? "red" : "#ffffff",
                          boxShadow: "none",
                        }}
                      >
                        Gold
                      </Button>
                      <Link href={`/product/platinum/${productSlug}`}>
                        <Button
                          style={{
                            backgroundColor: "#E5E4E2",
                            color: "#000",
                            boxShadow: "none",
                            borderColor: "#ffffff",
                            marginLeft: "10px",
                          }}
                        >
                          Platinum
                        </Button>
                      </Link>
                    </div>
                    <p className="mt-1">
                      Comfy, durable cotton tee for everyday wear
                    </p>
                  </div> */}
                  <div className="products-add-to-cart">
                    <div className="d-flex align-items-center gap-3">
                      <div className="input-counter">
                        <span className="minus-btn" onClick={decrementCounter}>
                          <i className="fas fa-minus"></i>
                        </span>
                        <input type="text" value={counter} />
                        <span className="plus-btn" onClick={incrementCounter}>
                          <i className="fas fa-plus"></i>
                        </span>
                      </div>

                      {availableCart &&
                      availableCart.includes(products && products._id) ? (
                        <Link href="/cart">
                          <button
                            type="submit"
                            className="default-btn"
                            style={{ backgroundColor: "#CF0018" }}
                          >
                            <i className="fas fa-shopping-bag"></i> GO TO CART
                          </button>
                        </Link>
                      ) : (
                        <button
                          type="submit"
                          className="default-btn"
                          onClick={() => {
                            addToCart(false);
                          }}
                        >
                          <i className="fas fa-shopping-bag"></i> ADD TO CART
                        </button>
                      )}

                      <button
                        className="default-btn"
                        onClick={() => {
                          addToCart(true);
                        }}
                      >
                        <i className="fas fa-bolt"></i> BUY NOW
                      </button>
                    </div>
                  </div>
                  <span
                    className="add-to-wishlist-btn pointer"
                    onClick={() => {
                      AddToWishlist();
                    }}
                    role="button"
                  >
                    <i className="fas fa-plus"></i>
                    Add to Wishlist
                  </span>
                  <div className="products-share">
                    <ul className="social">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a
                          href="https://facebook.com/spicywhips.global/"
                          className="facebook"
                          target="_black"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/SpicyWhips"
                          className="twitter"
                          target="_black"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://instagram.com/spicywhips.global/"
                          className="instagram"
                          target="_black"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="products-details-tabs">
                  <Tabs>
                    <TabList>
                      <Tab>Specifications</Tab>
                      <Tab>Additional information</Tab>
                      <Tab>
                        Reviews ({reviewsComment && reviewsComment.length})
                      </Tab>
                    </TabList>

                    <TabPanel>
                      <p>{ReactHtmlParser(Specifications)}</p>
                    </TabPanel>

                    <TabPanel>
                      {/* <table className="table table-striped">
                      <tbody>
                        <tr>
                          <td>Handle Height</td>
                          <td>40-45″</td>
                        </tr>
                        <tr>
                          <td>Width</td>
                          <td>24″</td>
                        </tr>
                        <tr>
                          <td>Wheels</td>
                          <td>12″</td>
                        </tr>
                        <tr>
                          <td>Dimensions</td>
                          <td>10 × 10 × 10 cm</td>
                        </tr>
                        <tr>
                          <td>Material</td>
                          <td>Iron</td>
                        </tr>
                      </tbody>
                    </table> */}
                      <p>{ReactHtmlParser(additional_information)}</p>
                    </TabPanel>

                    <TabPanel>
                      <div className="products-review-comments">
                        {reviewsComment && reviewsComment.length != 0 ? (
                          reviewsComment &&
                          reviewsComment.map((items, index) => {
                            return (
                              <div className="user-review" key={index}>
                                <img
                                  src={
                                    items &&
                                    items.customer &&
                                    items.customer.profile_img
                                  }
                                  alt="image"
                                />
                                <div className="review-rating">
                                  <ReactStars
                                    count={5}
                                    value={items && items.rating}
                                    size="5px"
                                    activeColor="#ffd700"
                                    isHalf={true}
                                    edit={false}
                                  />
                                </div>
                                <span className="d-block sub-name">
                                  {items &&
                                    items.customer &&
                                    items.customer.firstName}
                                </span>

                                <span role="button" className="d-flex">
                                  {items.images.map((data, index) => {
                                    return (
                                      <div
                                        style={{
                                          backgroundImage: `url(${data.img})`,
                                          width: "35px",
                                          height: "35px",
                                          backgroundSize: "cover",
                                          marginBottom: "5px",
                                          marginLeft: "5px",
                                        }}
                                        onClick={() => {
                                          setImgShow(!ImgShow);
                                          setReviewImage(data.img);
                                        }}
                                      />
                                    );
                                  })}
                                </span>

                                <span>{items && items.review}</span>
                              </div>
                            );
                          })
                        ) : (
                          <div className="text-center">
                            <h3>
                              There aren't any reviews for this product yet !
                            </h3>
                          </div>
                        )}
                      </div>

                      {/* <div className="review-form-wrapper">
                      <h3>Add a review</h3>
                      <p className="comment-notes">
                        Your email address will not be published. Required
                        fields are marked <span>*</span>
                      </p>
                      <form onSubmit={postReview}>
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <div className="rating">
                              <ReactStars
                                count={5}
                                onChange={(e) => setRatingChanged(e)}
                                size="5px"
                                activeColor="#ffd700"
                                isHalf={true}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <textarea
                                placeholder="Your review"
                                className="form-control"
                                cols="30"
                                rows="6"
                                onChange={(e) => setReview(e.target.value)}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <p className="comment-form-cookies-consent">
                              <input type="checkbox" id="test1" />
                              <label for="test1">
                                Save my name, email, and website in this browser
                                for the next time I comment.
                              </label>
                            </p>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <button type="submit">SUBMIT</button>
                          </div>
                        </div>
                      </form>
                    </div> */}
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />

      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setShow(!show)}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Size Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <img src={sizeChartImage} width="100%" />
        </Modal.Body>
      </Modal>

      <Modal
        show={ImgShow}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setImgShow(!ImgShow)}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Review Images</Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <img src={reviewImage} width="100%" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductsDetailsContent;
