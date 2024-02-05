import React, { useState, useEffect, useRef } from "react";
import Cookies from "universal-cookie";
import Link from "next/link";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../Hooks/useAxios";
import setHeader from "../Hooks/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StateJson from "../../public/state.json";
const Profileaddress = ({ data }) => {
  // Start Set cookies in header
  axios.defaults.headers.common["Authorization"] = setHeader();
  //End Set Cookies in Header
  const cookies = new Cookies();
  const uid = cookies.get("pid");
  const dispatch = useDispatch();
  const response = useSelector((response) => response);

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
    setWidth(window.innerWidth);
  }, []);

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
      <div className="checkout-area ">
        <div className="container">
          {/* Start Delivery Address code */}
          {addressData && addressData.length != 0 ? (
            <div className="row mb-5">
              <div className="col-12">
                <div className="billing-details">
                  <div className="row">
                    {addressData &&
                      addressData.map((data, index) => {
                        return (
                          <div className="col-lg-12 col-md-6 mb-4" key={index}>
                            <div class="accordion" id="accordionExample">
                              <div class="accordion-item">
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
              <div className="col-lg-3 col-md-12"></div>
              <div className="col-lg-12 col-md-12"></div>
            </div>
          ) : (
            ""
          )}

          {/* End Delivery Address code */}

          {/* Start Form for add address */}

          <div class="accordion col-12" id="accordionExample">
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
                                  onChange={(e) => setState(e.target.value)}
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
                                  type="number"
                                  name="phone"
                                  value={phone}
                                  onChange={(e) =>
                                    e.target.value.length <= 10
                                      ? setPhone(e.target.value.trim())
                                      : ""
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
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* End Form for add address */}
        </div>
      </div>
    </>
  );
};

export default Profileaddress;
