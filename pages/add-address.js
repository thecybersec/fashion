import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageTitle from "../components/Common/PageTitle";
import Accordion from "react-bootstrap/Accordion";
import SubscribeForm from "../components/Common/SubscribeForm";
import { BiRupee } from "react-icons/bi";
import Footer from "../components/_App/Footer";
import Cookies from "universal-cookie";
import Link from "next/link";
import axios from "axios";
import metaData from "../public/metadata/address.json";
import { useDispatch, useSelector } from "react-redux";
import GET_CART_TOTAL from "../components/Redux/Action/getcarttotal.action";
import useAxios from "../components/Hooks/useAxios";
import setHeader from "../components/Hooks/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StateJson from "../public/state.json";
import { useRouter } from "next/router";
const Addaddress = ({ data }) => {
  // Start Set cookies in header
  axios.defaults.headers.common["Authorization"] = setHeader();
  //End Set Cookies in Header
  const cookies = new Cookies();
  const uid = cookies.get("pid");
  const dispatch = useDispatch();
  const response = useSelector((response) => response);
  const amountDetails = response.GET_CART_TOTAL.data;
  const [width, setWidth] = useState();
  const [addressData, setAddressData] = useState();
  const [indexValue, setIndexValue] = useState();
  const [sendAddId, setSendAddId] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [landmark, setLandmark] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [updateBtn, setUpdateBtn] = useState("none");
  const [saveBtn, setSaveBtn] = useState("block");
  const [addressId, setAddressId] = useState("");
  const [addressTitle, setAddressTitle] = useState("Add a new address");
  const [addressOpen, setAddressOpen] = useState(false);
  const inputRef = useRef(null);
  const router = useRouter();
  const isBuy = router.query["isBuy"] ? true : false;
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setCountry("");
    setCity("");
    setLandmark("");
    setPhone("");
    setPincode("");
    setAddress("");
    setAddressId("");
  };

  // start SaveAddress
  const saveAddress = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "api/user/address/add",
        data: {
          user_id: uid,
          firstName: firstName,
          lastName: lastName,
          country: country,
          phone: phone,
          address: address,
          landmark: landmark,
          city: city,
          pincode: pincode,
          state: state,
        },
      });
      Notification("success");
      setAddressOpen(false);
      getAddress();
      resetForm();
      window.scrollBy(0, -500);
    } catch (err) {
      console.error(err);
    }
  };
  // End SaveAddress

  // Start GET Address Details
  const getAddress = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `api/user/address/${uid}`,
      });
      setAddressData(response.data.result);
    } catch (err) {
      console.error(err);
    }
  };
  // End  GET Address Details

  // Start Focus on First field
  const handleClick = () => {
    inputRef.current.focus();
  };
  // End Focus on First filed

  // start Edit Address
  const editAddress = (data) => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setCountry(data.country);
    setCity(data.city);
    setLandmark(data.landmark);
    setPhone(data.phone);
    setPincode(data.pincode);
    setAddress(data.address);
    setAddressId(data._id);
    setUpdateBtn("block");
    setSaveBtn("none");
    window.scrollBy(0, 300);
  };
  // End Edit Address

  const updateAddress = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "api/user/address/update",
        data: {
          user_id: uid,
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          address: address,
          address_id: addressId,
          landmark: landmark,
          city: city,
          pincode: pincode,
          state: state,
        },
      });
      Notification("UpdateSuccess");
      getAddress();
      setAddressTitle("Add a new address");
      window.scrollBy(0, -900);
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAddress();
    dispatch(GET_CART_TOTAL(uid, isBuy));
    setWidth(window.innerWidth);
  }, [isBuy]);

  // Start Notification Code
  const Notification = (type) => {
    switch (type) {
      case "success":
        toast.success("Address Saved Successfully !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
      case "UpdateSuccess":
        toast.success("Address Update Successfully !", {
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
          pageTitle="Address"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Address"
        />
      ) : (
        ""
      )}

      <div className="checkout-area ptb-100">
        <div className="container">
          {/* <div className="user-actions">
            <span>
              Returning customer?{" "}
              <Link href="/profile-authentication">
                <a>Click here to login</a>
              </Link>
            </span>
          </div> */}
          {/* Start Delivery Address code */}
          {addressData && addressData.length != 0 ? (
            <div className="row mb-5">
              <div className="col-lg-8 col-md-12">
                <div className="billing-details">
                  <h3>
                    <span>Delivery Address</span>
                  </h3>
                  <div className="row">
                    {addressData &&
                      addressData.map((data, index) => {
                        return (
                          <div className="col-lg-12 col-md-6 mb-4" key={index}>
                            <div class="accordion" id="accordionExample">
                              <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                  <button
                                    class="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                  ></button>
                                </h2>
                                <div
                                  id="collapseOne"
                                  class="accordion-collapse collapse show"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div class="accordion-body">
                                    <div>
                                      <form action="/action_page.php">
                                        <div class="form-check">
                                          <div className="d-flex justify-content-between">
                                            <label
                                              class="form-check-label"
                                              for="radio2"
                                              style={{ color: "#000" }}
                                            >
                                              <input
                                                type="radio"
                                                class="form-check-input"
                                                id="radio2"
                                                name="optradio"
                                                value="option2"
                                                onClick={() => {
                                                  setIndexValue(index);
                                                  setSendAddId(data._id);
                                                  cookies.set(
                                                    "addId",
                                                    data._id,
                                                    { path: "/" }
                                                  );
                                                }}
                                                checked={
                                                  indexValue == index
                                                    ? "checked"
                                                    : ""
                                                }
                                              />
                                              {data && data.firstName}{" "}
                                              {data && data.lastName}{" "}
                                            </label>

                                            <span
                                              style={{
                                                fontWeight: "700",
                                                color: "#cf0018",
                                                cursor: "pointer",
                                              }}
                                              onClick={() => {
                                                editAddress(data);
                                                setAddressOpen(true);
                                                setAddressTitle(
                                                  "Update Address"
                                                );
                                              }}
                                            >
                                              EDIT
                                            </span>
                                          </div>
                                          <span>
                                            {data && data.address} ,
                                            {data && data.state},
                                            {data && data.pincode}
                                          </span>
                                          <span>
                                            {" "}
                                            <br />
                                            {data && data.phone}
                                          </span>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <a
                    className="btn default-btn p-2"
                    role="button"
                    onClick={() => {
                      setAddressOpen(true);
                      setAddressTitle("Add a new address");
                      setFirstName("");
                      setLastName("");
                      setCountry("");
                      setCity("");
                      setLandmark("");
                      setPhone("");
                      setPincode("");
                      setAddress("");
                      setAddressId("");
                      setUpdateBtn("none");
                      setSaveBtn("block");
                      window.scrollBy(0, 500);
                    }}
                  >
                    Add Address
                  </a>{" "}
                </div>
              </div>
              <div className="col-lg-1 col-md-12"></div>
              <div className="col-lg-3 col-md-12">
                <div className="cart-totals">
                  <ul>
                    <li>
                      Subtotal{" "}
                      <span>
                        {" "}
                        <BiRupee style={{ marginTop: "-4px" }} />
                        {amountDetails && amountDetails.subtotal}
                      </span>
                    </li>
                    <li>
                      Shipping
                      <span>
                        {" "}
                        <BiRupee style={{ marginTop: "-4px" }} />
                        {amountDetails && amountDetails.shipping}
                      </span>
                    </li>
                    <li>
                      Coupon
                      <span>
                        {" "}
                        <BiRupee style={{ marginTop: "-4px" }} />
                        {amountDetails && amountDetails.coupon}
                      </span>
                    </li>
                    <li>
                      Total{" "}
                      <span>
                        <BiRupee style={{ marginTop: "-4px" }} />
                        {amountDetails && amountDetails.total}
                      </span>
                    </li>
                  </ul>
                  {sendAddId != undefined ? (
                    <Link
                      href={
                        isBuy
                          ? `/checkout?addId=${sendAddId}&isBuy=true`
                          : `/checkout?addId=${sendAddId}`
                      }
                    >
                      <a
                        className="btn default-btn"
                        role="button"
                        aria-disabled="true"
                      >
                        Proceed to Checkout
                      </a>
                    </Link>
                  ) : (
                    <Link href="#">
                      <a
                        className="btn default-btn disabled"
                        role="button"
                        aria-disabled="true"
                      >
                        Proceed to Checkout
                      </a>
                    </Link>
                  )}
                </div>
              </div>
              <div className="col-lg-12 col-md-12"></div>
            </div>
          ) : (
            ""
          )}

          {/* End Delivery Address code */}

          {/* Start Form for add address */}

          <div class="accordion col-lg-8 col-md-12" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  onClick={() => setAddressOpen(true)}
                >
                  <h4>{addressTitle}</h4>
                </button>
              </h2>
              <div
                id="collapseOne"
                class={`accordion-collapse collapse ${
                  addressOpen == true ? "show" : ""
                }`}
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <form onSubmit={saveAddress} id="addressForm">
                    <div className="row">
                      <div>
                        <div className="billing-details">
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="form-group">
                                <label>
                                  First name <span className="required">*</span>
                                </label>
                                <input
                                  type="text"
                                  name="firstName"
                                  value={firstName}
                                  onChange={(e) =>
                                    setFirstName(
                                      e.target.value.replace(/\s+/g, " ")
                                    )
                                  }
                                  autofocus
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="form-group">
                                <label>
                                  Last name <span className="required">*</span>
                                </label>
                                <input
                                  type="text"
                                  name="lastName"
                                  onChange={(e) =>
                                    setLastName(
                                      e.target.value.replace(/\s+/g, " ")
                                    )
                                  }
                                  value={lastName}
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>
                                  Country / Region{" "}
                                  <span className="required">*</span>
                                </label>
                                <select
                                  className="form-select"
                                  onChange={(e) =>
                                    setCountry(
                                      e.target.value.replace(/\s+/g, " ")
                                    )
                                  }
                                  name="country"
                                  value={country}
                                >
                                  <option selected>Select</option>
                                  <option defaultValue="1">India</option>
                                  <option defaultValue="2">
                                    United States
                                  </option>
                                  <option defaultValue="3">Australia</option>
                                  <option defaultValue="4">France</option>
                                  <option defaultValue="5">UK</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>
                                  Street address{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  type="text"
                                  name="address"
                                  onChange={(e) =>
                                    setAddress(
                                      e.target.value.replace(/\s+/g, " ")
                                    )
                                  }
                                  value={address}
                                  className="form-control"
                                  placeholder="House number and street name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Landmark</label>
                                <input
                                  type="text"
                                  name="landmark"
                                  onChange={(e) =>
                                    setLandmark(
                                      e.target.value.replace(/\s+/g, " ")
                                    )
                                  }
                                  value={landmark}
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>State</label>
                                <select
                                  className="form-control"
                                  name="name"
                                  onChange={(e) =>
                                    setState(
                                      e.target.value.replace(/\s+/g, " ")
                                    )
                                  }
                                >
                                  <option>Select State</option>
                                  {StateJson?.map((items, index) => {
                                    return <option>{items}</option>;
                                  })}
                                </select>
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>
                                  Town / City{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  type="text"
                                  name="city"
                                  onChange={(e) =>
                                    setCity(e.target.value.replace(/\s+/g, " "))
                                  }
                                  value={city}
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>
                                  Postcode <span className="required">*</span>
                                </label>
                                <input
                                  type="text"
                                  name="pincode"
                                  value={pincode}
                                  onChange={(e) =>
                                    setPincode(
                                      e.target.value.replace(/\s+/g, " ")
                                    )
                                  }
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>
                                  Phone <span className="required">*</span>
                                </label>
                                <input
                                  type="text"
                                  name="phone"
                                  value={phone}
                                  onChange={(e) =>
                                    setPhone(
                                      e.target.value.replace(/\s+/g, " ")
                                    )
                                  }
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="default-btn mb-3"
                              style={{ display: `${saveBtn}` }}
                            >
                              SAVE
                            </button>
                            <button
                              type="button"
                              className="default-btn mb-3"
                              onClick={() => {
                                updateAddress(), setAddressOpen(false);
                              }}
                              style={{ display: `${updateBtn}` }}
                            >
                              UPDATE
                            </button>
                            <div className="col-lg-12 col-md-12">
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="checkme"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkme"
                                >
                                  Save this information for next time
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-1 col-md-12"></div>
                      <div className="col-lg-2 col-md-12"></div>
                      <div className="col-lg-12 col-md-12"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* End Form for add address */}
        </div>
      </div>
      <ToastContainer />

      <SubscribeForm />

      <Footer />
    </>
  );
};

export default Addaddress;

export const getStaticProps = async () => {
  return {
    props: {
      data: metaData,
    },
  };
};
