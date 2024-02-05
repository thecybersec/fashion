import React, { useEffect, useState, useRef } from "react";
import TopHeader from "../components/_App/TopHeader";
import Head from "next/head";
import { Form, Button } from "react-bootstrap";
import Navbar from "../components/_App/Navbar";
import PageTitle from "../components/Common/PageTitle";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import axios from "axios";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import setHeader from "../components/Hooks/axiosInstance";
import { useRouter } from "next/router";

import GET_CART_TOTAL from "../components/Redux/Action/getcarttotal.action";
import useAxios from "../components/Hooks/useAxios";
import { BiRupee } from "react-icons/bi";
const Checkout = () => {
  // Start Set cookies in header
  axios.defaults.headers.common["Authorization"] = setHeader();
  //End Set Cookies in Header
  const response = useSelector((response) => response);
  const dispatch = useDispatch();
  const myRef = useRef();
  const router = useRouter();
  const addressId = router.query["addId"];
  const isBuy = router.query["isBuy"] ? true : false;
  const amountDetails = response.GET_CART_TOTAL.data;
  const [paymentDiv, setPaymentDiv] = useState(0);
  const [accCode, setAccCode] = useState();
  const [randomNumber, setRandomNumber] = useState(null);
  const [encRequest, setEncRequest] = useState();
  const [cartData, setCartData] = useState([]);
  const [width, setWidth] = useState();
  const [Amount, setAmount] = useState();
  const [transactionId, setTransactionId] = useState();
  const [orderId, setOrderId] = useState();
  const [online, setOnline] = useState("online");
  const [addDetails, setAddDetails] = useState([]);
  const cookies = new Cookies();
  const uid = cookies.get("pid");
  const addId = cookies.get("addId");
  const order_id = cookies.get("orderIds");
  const eid = cookies.get("eid");
  const couponId = Amount?.couponId;
  const totalAmount = amountDetails && amountDetails.subtotal;
  //Start GET Cart Details code
  const cartDetails = async (isBuyStatus) => {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/user/getCartItems/${uid}`,
        data: {
          isBuy: isBuyStatus,
        },
      });
      setCartData(response.data.result);
      setAmount(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  //End GET Cart details Code

  // Start Online payment

  const OnlinePay = async (e) => {
    myRef.current.click();
    generateRandomNumber();
  };

  // End Online Payment

  // start Generate random number
  const generateRandomNumber = () => {
    const min = 100000;
    const max = 999999;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomNum);
  };
  // End Generate random number

  // Start Generate Ranndom ORDER ID
  const generateRandomString = () => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 15; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setOrderId(result);
    cookies.set("orderIds", result, { path: "/" });
  };

  // End Generate Random Order Id

  const takeResponse = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await axios({
        method: "POST",
        url: "https://payment.spicywhips.com/ccavRequestHandlerApi.php",
        data: formData,
      });
      setAccCode(response.data.access_code);
      setEncRequest(response.data.encRequest);
    } catch (err) {
      console.log(err);
    }
  };

  // Start Api call for online payment use details

  const details = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "api/user/getaddress",
        data: {
          addressId: addId,
          userId: uid,
        },
      });
      setAddDetails(response.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  // End Api call for online payment use details

  // Start Check payment Status
  const checkPaymentStatus = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "api/paymentgatewaydata/getByOrderId",
        data: {
          order_id: order_id,
        },
      });

      setTransactionId(response.data.data.tracking_id);
      {
        response.data.data.order_status === "Success" &&
        response.data.data.tracking_id != undefined &&
        totalAmount != undefined
          ? onlinePayment()
          : "";
      }
    } catch (err) {
      console.error(err);
    }
  };

  // End Payment Status

  // Start Online Payment API call
  const onlinePayment = async () => {
    const data = {
      userid: uid,
      transactionid: transactionId,
      order_id: order_id,
      addressid: addId,
      paymentmode: "online",
      paymentstatus: "success",
      orderstatus: "success",
      total: totalAmount,
      isGift: false,
      giftName: "",
      giftMsg: "",
      referCode: "gnOmg13V",
      couponId: couponId,
      isBuy: isBuy,
    };
    try {
      const response = await axios({
        method: "POST",
        url: "/api/booking/create",
        data: data,
      });
      router.push("/thankyou");
      cookies.remove("orderIds");
    } catch (err) {
      console.error(err);
    }
  };

  // End  Online Payment API call

  // Start CashOnDelivery API call
  const cashOnDelivery = async () => {
    const data = {
      userid: uid,
      transactionid: "Spicy87686",
      order_id: orderId,
      addressid: addressId,
      paymentmode: "cod",
      paymentstatus: "pending",
      orderstatus: "pending",
      total: totalAmount,
      isGift: false,
      giftName: "",
      giftMsg: "",
      referCode: "gnOmg13V",
      couponId: couponId,
      isBuy: isBuy,
    };

    try {
      const response = await axios({
        method: "POST",
        url: "/api/booking/create",
        data: data,
      });
      router.push("/thankyou");
    } catch (err) {
      console.error(err);
    }
  };

  // End CashOnDelivery API call

  const Status = (e) => {
    e.preventDefault();
    {
      online == "online" ? OnlinePay() : cashOnDelivery();
    }
  };

  useEffect(() => {
    if (accCode && encRequest != undefined) {
      document.redirect.submit();
    } else {
      console.log("error 404");
    }
  }, [accCode, encRequest]);

  useEffect(() => {
    dispatch(GET_CART_TOTAL(uid, isBuy));
    details();
    setWidth(window.innerWidth);
  }, [isBuy]);

  useEffect(() => {
    if (isBuy) {
      cartDetails(true);
    } else {
      cartDetails(false);
    }
  }, [isBuy]);

  useEffect(() => {
    {
      addressId != undefined ? generateRandomString() : checkPaymentStatus();
    }
  }, [totalAmount, couponId]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <title>Checkout | SpicyWhips</title>
      </Head>
      <TopHeader />

      <Navbar />

      {width > 520 ? (
        <PageTitle
          pageTitle="Checkout"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Checkout"
        />
      ) : (
        ""
      )}

      {/* For payment Gateway */}
      <form
        method="post"
        name="redirect"
        action="https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"
      >
        <input type="hidden" name="access_code" value={accCode} />
        <input type="hidden" name="encRequest" value={encRequest} />
      </form>
      {/* ------------------------------------------------------------------------------------------------------------------------------- */}
      <form onSubmit={takeResponse} name="customerData" method="POST">
        <input type="hidden" name="tid" value={randomNumber} />
        <input type="hidden" name="merchant_id" value="1986592" />
        <input type="hidden" name="order_id" value={order_id} />
        <input type="hidden" name="amount" value={Amount?.total} />
        <input type="hidden" name="currency" value="INR" />
        <input
          type="hidden"
          name="billing_name"
          value={addDetails?.firstName + addDetails?.lastName}
        />
        <input
          type="hidden"
          name="billing_address"
          value={addDetails?.address}
        />
        <input type="hidden" name="billing_city" value={addDetails?.city} />
        <input type="hidden" name="billing_state" value={addDetails?.address} />
        <input type="hidden" name="billing_zip" value={addDetails?.pincode} />
        <input
          type="hidden"
          name="billing_country"
          value={addDetails?.country}
        />
        <input type="hidden" name="billing_tel" value={addDetails?.phone} />
        <input type="hidden" name="billing_email" value={eid} />

        <input
          type="hidden"
          name="redirect_url"
          value="https://payment.spicywhips.com/ccavResponseHandler.php?"
        />
        <input type="hidden" name="cancel_url" value="https://spicywhips.com" />
        <input type="hidden" name="language" value="EN" />
        <button type="submit" ref={myRef} className="d-none">
          SUBMIT
        </button>
      </form>
      {/* For payment Gateway */}

      {paymentDiv ? (
        <div class="container mt-5">
          <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
              <div
                className="dropin-parent"
                id="drop_in_container"
                style={{ height: "700px" }}
              ></div>
            </div>
            <div class="col-4"></div>
          </div>
        </div>
      ) : (
        <div className="checkout-area ptb-100">
          <div className="container">
            <form>
              <div className="row">
                <div className="col-lg-2 col-md-12"></div>
                <div className="col-lg-2 col-md-12"></div>
                <div className="col-lg-12 col-md-12">
                  <div className="order-details">
                    <h3>Review your order</h3>
                    <div className="order-table table-responsive">
                      <table className="table table-bordered">
                        <tbody>
                          {cartData &&
                            cartData.map((items, index) => {
                              return (
                                <tr key={index}>
                                  <td className="product-name">
                                    <Link href="/product">
                                      <a>
                                        {items &&
                                          items.product &&
                                          items.product.name}{" "}
                                        x {items && items.quantity}
                                      </a>
                                    </Link>
                                  </td>
                                  <td className="product-total">
                                    <span className="subtotal-amount">
                                      <BiRupee style={{ marginTop: "-4px" }} />
                                      {items && items.price}
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}

                          <tr>
                            <td className="order-subtotal">
                              <span>Cart Subtotal</span>
                            </td>
                            <td className="order-subtotal-price">
                              <span className="order-subtotal-amount">
                                <BiRupee style={{ marginTop: "-4px" }} />
                                {amountDetails && amountDetails.subtotal}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="order-shipping">
                              <span>Shipping</span>
                            </td>
                            <td className="shipping-price">
                              <span>
                                <BiRupee style={{ marginTop: "-4px" }} />
                                {amountDetails && amountDetails.shipping}
                              </span>
                            </td>
                          </tr>

                          {amountDetails.coupon != 0 ? (
                            <tr>
                              <td className="order-shipping">
                                <span>Coupon</span>
                              </td>
                              <td className="shipping-price">
                                <span>
                                  <BiRupee style={{ marginTop: "-4px" }} />
                                  {amountDetails && amountDetails.coupon}
                                </span>
                              </td>
                            </tr>
                          ) : (
                            ""
                          )}

                          <tr>
                            <td className="total-price">
                              <span>Order Total</span>
                            </td>
                            <td className="product-subtotal">
                              <span className="subtotal-amount">
                                <BiRupee style={{ marginTop: "-4px" }} />
                                {amountDetails && amountDetails.total}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="payment-box">
                      <div className="payment-method">
                        <p>
                          <input
                            type="radio"
                            id="paypal"
                            name="radio-group"
                            onChange={(e) => setOnline("online")}
                          />
                          <label htmlFor="paypal">Online payment</label>
                          <img
                            src="/images/paypal.png"
                            alt="paypal"
                            width="30%"
                          />
                          Your personal data will be used to process your order,
                          support your experience throughout this website, and
                          for other purposes described in our{" "}
                          <Link href="/privacy-policy">
                            <a>privacy policy</a>
                          </Link>
                          .
                        </p>
                        <p>
                          <input
                            type="radio"
                            id="cash-on-delivery"
                            name="radio-group"
                            onChange={(e) => setOnline("")}
                          />
                          <label htmlFor="cash-on-delivery">
                            Cash on delivery
                          </label>
                          Pay with cash upon delivery.
                        </p>
                      </div>
                      <button className="default-btn" onClick={Status}>
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="mt-5">
        <SubscribeForm />
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
