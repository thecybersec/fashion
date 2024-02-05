import React, { useEffect, useState } from "react";
import Head from "next/head";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageTitle from "../components/Common/PageTitle";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import axios from "axios";
import Cookies from "universal-cookie";
import setHeader from "../components/Hooks/axiosInstance";
import useAxios from "../components/Hooks/useAxios";
import { BiRupee } from "react-icons/bi";
import { FcApproval } from "react-icons/fc";
import { TbAlertTriangle } from "react-icons/tb";
import metaData from "../public/metadata/cart.json";
import { CgScrollH } from "react-icons/cg";
import { useDispatch } from "react-redux";
import GET_CART_LENGTH from "../components/Redux/Action/getcartlength.action";
import Lottie from "react-lottie";
import animationData from "../lottie/cart.json";
import loaderData from "../lottie/loader.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = ({ data }) => {
  // Start Set cookies in header
  axios.defaults.headers.common["Authorization"] = setHeader();
  //End Set Cookies in Header

  const [cartData, setCartData] = useState([]);
  const [Amount, setAmount] = useState();
  const [width, setWidth] = useState();

  const [show, setShow] = useState("none");
  const [coupon, setCoupon] = useState();
  const [couponApply, setCouponApply] = useState();
  const [loaderShow, loaderSetShow] = useState("d-block");
  const [visible, setVisible] = useState(false);
  const cookies = new Cookies();
  const uid = cookies.get("pid");
  const dispatch = useDispatch();
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
        toast.success("Product removed from cart !", {
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

  //Start GET Cart Details code
  const cartDetails = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/user/getCartItems/${uid}`,
        data: {
          isBuy: false,
        },
      });
      setCartData(response.data.result);
      setAmount(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  //End GET Cart details Code

  // Start updateCart code
  const updateCart = async (id, qty) => {
    if (qty == 0) {
      return;
    }
    try {
      const response = await axios({
        method: "POST",
        url: "api/user/cart/updateCartQty",
        data: {
          cart_id: id,
          user_id: uid,
          quantity: qty,
        },
      });
      cartDetails();
    } catch (err) {
      console.error(err);
    }
  };
  // End updateCart code
  // Start Remove Cart Items
  const removeCartItem = async (id) => {
    try {
      const response = await axios({
        method: "GET",
        url: `api/user/deleteCartId/${uid}/${id}`,
      });

      Notification("success");
      cartDetails();
      dispatch(GET_CART_LENGTH(uid));
    } catch (err) {
      console.error(err);
    }
  };
  // End Remove Cart Items

  // Start Get Remove item details send to google analytics of delete from cart
  const removeProductDetailsDataLayer = (items) => {
    const SKU = items._id.slice(0, 5);
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
          item_name: items.product.name,
          item_category: items.producttype,
          item_variant: items.color,
          price: items.price,
          quantity: items.quantity,
        },
      ],
    });
  };
  // End Get Remove item details send to google analytics of delete from cart

  //Start  Apply Coupon code
  const applyCoupon = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "api/user/checkCoupon",
        data: {
          userId: uid,
          coupon_code: coupon,
        },
      });
      setAmount(response.data);
      setCouponApply(response.data.coupon);
      setVisible(true);
    } catch (err) {
      console.error(err);
    }
  };
  // End Apply Coupon Code

  useEffect(() => {
    cartDetails();
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
      <TopHeader />
      <Navbar />
      {width > 520 ? (
        <PageTitle
          pageTitle="Cart"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Cart"
        />
      ) : (
        ""
      )}

      {cartData && cartData.length != 0 ? (
        <div className="cart-area ptb-100" style={{ display: show }}>
          {width < 520 ? (
            <div className="text-center text-danger">
              <CgScrollH style={{ fontSize: "16px", marginTop: "-2px" }} />
              <span>Scroll</span>
              <CgScrollH style={{ fontSize: "16px", marginTop: "-2px" }} />
            </div>
          ) : (
            ""
          )}

          <div className="container">
            <form>
              <div className="cart-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">PRODUCTS</th>
                      <th scope="col">UNIT PRICE</th>
                      <th scope="col">QUANTITY</th>
                      <th scope="col">AMOUNT</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData &&
                      cartData.map((items, index) => {
                        const cost = items.price * items.quantity;
                        const segment = items.producttype.replace(/^\w/, (c) =>
                          c.toUpperCase()
                        );

                        const slug =
                          items && items.product && items.product.slug;
                        return (
                          <tr key={index}>
                            <td className="product-thumbnail">
                              <Link href={`/product/gold/${slug}`}>
                                <div>
                                  <a>
                                    <img
                                      src={items && items.image}
                                      alt="item"
                                    />
                                    <h3>
                                      {items &&
                                        items.product &&
                                        items.product.name}
                                      <p className="d-flex">
                                        Size: {items.size}, Color:{" "}
                                        <div
                                          style={{
                                            width: "12px",
                                            height: "12px",
                                            backgroundColor: items?.color,
                                            marginTop: "8px",
                                          }}
                                        ></div>{" "}
                                        , Variant: {segment}
                                      </p>
                                    </h3>
                                  </a>
                                </div>
                              </Link>
                            </td>
                            <td>
                              <BiRupee style={{ marginTop: "-4px" }} />
                              {items && items.price}
                            </td>
                            <td className="product-quantity">
                              <div className="input-counter">
                                <span
                                  className="minus-btn"
                                  onClick={() => {
                                    updateCart(items._id, items.quantity - 1);
                                  }}
                                >
                                  <i className="fas fa-minus"></i>
                                </span>
                                <input
                                  type="text"
                                  value={items && items.quantity}
                                />
                                <span
                                  className="plus-btn"
                                  onClick={() => {
                                    updateCart(items._id, items.quantity + 1);
                                  }}
                                >
                                  <i className="fas fa-plus"></i>
                                </span>
                              </div>
                            </td>
                            <td>
                              {" "}
                              <BiRupee style={{ marginTop: "-4px" }} />
                              {cost}
                            </td>
                            <td>
                              <a
                                href="javascript:void(0)"
                                className="remove"
                                onClick={() => {
                                  removeCartItem(items._id);
                                  removeProductDetailsDataLayer(items);
                                }}
                              >
                                <i className="far fa-trash-alt"></i>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>

              <div className="cart-buttons">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-sm-12 col-md-7">
                    <div className="shopping-coupon-code">
                      <div style={{ position: "relative" }}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Coupon code"
                          name="coupon_code"
                          id="coupon-code"
                          onChange={(e) => setCoupon(e.target.value)}
                        />
                        {visible ? (
                          couponApply != 0 ? (
                            <FcApproval
                              style={{
                                position: "absolute",
                                right: "170px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: "99",
                                fontSize: "20px",
                              }}
                            />
                          ) : (
                            <TbAlertTriangle
                              style={{
                                position: "absolute",
                                right: "170px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: "99",
                                color: "red",
                                fontSize: "20px",
                              }}
                            />
                          )
                        ) : (
                          ""
                        )}
                      </div>
                      <button onClick={applyCoupon}>Apply Coupon</button>
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-12 col-md-5 text-end"></div>
                </div>
              </div>
              <div className="cart-totals">
                <ul>
                  <li>
                    Subtotal{" "}
                    <span>
                      {" "}
                      <BiRupee style={{ marginTop: "-4px" }} />
                      {Amount && Amount.subtotal}
                    </span>
                  </li>
                  <li>
                    Shipping{" "}
                    <span>
                      <BiRupee style={{ marginTop: "-4px" }} />
                      {Amount && Amount.shipping}
                    </span>
                  </li>
                  <li>
                    Coupon
                    <span>
                      <BiRupee style={{ marginTop: "-4px" }} />
                      {Amount && Amount.coupon}
                    </span>
                  </li>
                  <li>
                    Total{" "}
                    <span>
                      <BiRupee style={{ marginTop: "-4px" }} />
                      {Amount && Amount.total}
                    </span>
                  </li>
                </ul>

                <Link href="/add-address">
                  <a className="default-btn">Proceed</a>
                </Link>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      ) : (
        <div className="mb-5" style={{ display: show }}>
          <Lottie options={defaultOptions} height={400} width={400} />
          <div className="text-center mt-3">
            <h4>Your cart is empty!</h4>
            <h6>Add items to it now.</h6>

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
      <SubscribeForm />
      <Footer />
    </>
  );
};

export default Cart;

export const getStaticProps = async () => {
  return {
    props: {
      data: metaData,
    },
  };
};
