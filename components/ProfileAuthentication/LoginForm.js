import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import useAxios from "../Hooks/useAxios";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import setHeader from "../Hooks/axiosInstance";
const LoginForm = () => {
  // Start Set cookies in header
  axios.defaults.headers.common["Authorization"] = setHeader();
  //End Set Cookies in Header
  const [formData, setFormData] = useState({});
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const [enterNumber, setEnterNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [showOtp, setShowOtp] = useState(false);
  const [showLoginOtp, setShowLoginOtp] = useState(false);
  const [otpRegexValue, setOtpRegexValue] = useState("");
  const [loginOtpRegex, setLoginOtpRegex] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [existUser, setExistUser] = useState(false);
  const [rightOTP, setIsRightOTP] = useState(false);
  const router = useRouter();
  const cookies = new Cookies();
  const productSlug = router.query["product"];
  const isBuy = router.query["isBuy"];
  // start Login formData
  const getFormData = (event) => {
    event.preventDefault();
    const value = event.target.value.trim(); // Remove leading and trailing whitespace
    const prop = event.target.name;

    // Check if the input contains any non-whitespace characters
    const hasText = /\S/.test(value);

    if (hasText) {
      setFormData((oldData) => {
        return {
          ...oldData,
          [prop]: value,
        };
      });
    } else {
      // Clear the input value
      event.target.value = "";
    }
  };

  const LoginUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "api/signin",
        data: formData,
      });
      const token = response && response.data.token;
      const uid = response && response.data.user._id;
      const eid = response && response.data.user.email;
      const name = response && response.data.user.fullName;

      cookies.set("Auth", token, { path: "/", maxAge: "86400" });
      cookies.set("pid", uid, { path: "/", maxAge: "86400" });
      cookies.set("eid", eid, { path: "/", maxAge: "86400" });
      cookies.set("name", name, { path: "/", maxAge: "86400" });
      Notification("success");

      if (productSlug != undefined && isBuy != true) {
        addToCart(uid, isBuy);
        setExistUser(false);
      } else if (productSlug != undefined && isBuy) {
        addToCart(uid, isBuy);
        setExistUser(false);
      } else {
        setExistUser(false);
        setTimeout(() => {
          router.push("/profile-authentication");
        }, 2000);
      }
    } catch (err) {
      {
        err?.response?.data?.status === 409
          ? setExistUser(true)
          : setExistUser(false);
      }
      Notification("error");
    }
  };
  // End Login Form

  // Start Add to cart when comes from product details page when user is not logged in

  const addToCart = async (uid, isBuyStatus) => {
    const data = {
      user_id: uid,
      name: window.sessionStorage.getItem("name"),
      image: window.sessionStorage.getItem("image"),
      product_id: window.sessionStorage.getItem("product_id"),
      price: window.sessionStorage.getItem("price"),
      mrp: window.sessionStorage.getItem("mrp"),
      size: window.sessionStorage.getItem("size"),
      color: window.sessionStorage.getItem("color"),
      fabric: window.sessionStorage.getItem("fabric"),
      quantity: window.sessionStorage.getItem("quantity"),
      product_type: window.sessionStorage.getItem("product_type"),
      printer_id: window.sessionStorage.getItem("printer_id"),
      isBuy: isBuyStatus,
    };
    try {
      const response = await axios({
        method: "POST",
        url: "/api/user/cart/addtocart",
        data: data,
      });
      {
        isBuyStatus
          ? setTimeout(() => {
              router.push("/add-address?isBuy=true");
            }, 1500)
          : setTimeout(() => {
              router.push("/cart");
            }, 1500);
      }
    } catch (err) {
      console.log(err);
    }
  };
  //End  Add to cart when comes from product details page when user is not logged in

  // Start Notification Code
  const Notification = (type) => {
    switch (type) {
      case "success":
        toast.success("Login Successful !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
      case "error":
        toast.error("Login Failed !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;

      case "wrongOtp":
        toast.error("Wrong OTP !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;

      case "passwordMismatch":
        toast.error("Password Mismatch", {
          position: "top-right",
          autoClose: 3996,
        });
        break;

      case "passwordChange":
        toast.success("Password Changed Successfully", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
    }
  };
  // End  Notification Code
  // Start Regex for Mobile number
  const getNumber = (event) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setEnterNumber(input);
    }
  };
  // End Regex for Mobile number

  // Start send otp to number
  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "api/forgotsendotp",
        data: {
          phone: enterNumber,
        },
      });
      setShow(false);
      setShowOtp(true);
    } catch (err) {
      console.log(err);
    }
  };
  // End send otp to number

  // Start Regex for otp modal
  const getOtpData = (event) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setOtpRegexValue(input);
    }
  };
  // End Regex for otp modal

  // start Verify Otp Modal
  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "api/forgotverifyotp",
        data: {
          phone: enterNumber,
          otp: otpRegexValue,
        },
      });
      if (response.data.status == 200) {
        setShowOtp(false);
        setShowPassword(true);
      } else {
        Notification("wrongOtp");
      }
    } catch (err) {
      console.err(err);
    }
  };
  // End Verify Otp Modal

  const forgetPassword = async (e) => {
    e.preventDefault();
    if (password == ConfirmPassword) {
      try {
        const response = await axios({
          method: "POST",
          url: "api/forgotupdatepassword",
          data: {
            phone: enterNumber,
            password: password,
          },
        });
        setShowPassword(false);
        Notification("passwordChange");
      } catch (err) {
        console.err(err);
      }
    } else {
      Notification("passwordMismatch");
    }
  };

  // Start Login with OTP
  const LoginWithOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "api/user/signSetOtp",
        data: {
          phone: phoneNumber,
        },
      });
      {
        response.data.status == 200 ? setShowLoginOtp(true) : "";
      }
    } catch (err) {
      console.log(err.response);
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  // End Login with OTP

  const getLoginOtpData = (event) => {
    setIsRightOTP(false);
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setLoginOtpRegex(input);
    }
  };

  // Start Login with Otp verification
  const loginOtpVerification = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "/api/verifyotp",
        data: {
          phone: phoneNumber,
          otp: loginOtpRegex,
        },
      });
      const token = response && response.data.token;
      const uid = response && response.data.result._id;
      const eid = response && response.data.result.email;
      const name = response && response.data.result.firstName;
      cookies.set("Auth", token, { path: "/", maxAge: "86400" });
      cookies.set("pid", uid, { path: "/", maxAge: "86400" });
      cookies.set("eid", eid, { path: "/", maxAge: "86400" });
      cookies.set("name", name, { path: "/", maxAge: "86400" });
      Notification("success");
      setShowLoginOtp(false);
      setIsRightOTP(false);
      if (productSlug != undefined && isBuy != true) {
        addToCart(uid, isBuy);
      } else if (productSlug != undefined && isBuy) {
        addToCart(uid, isBuy);
      } else {
        setTimeout(() => {
          router.push("/profile-authentication");
        }, 2000);
      }
    } catch (err) {
      console.log(err);
      setIsRightOTP(true);
    }
  };
  // End Login with Otp verification
  return (
    <>
      <div className="login-form">
        <h2>Login</h2>

        {productSlug != undefined ? (
          <p className="text-danger">
            Login or Sign Up to continue with the purchase
          </p>
        ) : (
          ""
        )}

        {visible ? (
          // Start Login with OTP
          <form onSubmit={LoginWithOtp}>
            <div className="form-group mb-3">
              <label>
                Phone Number{" "}
                <span style={{ color: "#2D74F0" }}>(Already a user)</span>
              </label>
              <input
                type="tel"
                className="form-control"
                value={phoneNumber}
                placeholder="Enter Registered Phone Number"
                name="phone"
                onChange={(e) => {
                  const phoneNumber = e.target.value.replace(/\s/g, "");
                  if (phoneNumber.length <= 10) {
                    setPhoneNumber(phoneNumber);
                  }
                }}
              />
            </div>
            <div className="text-end">
              <p role="button" onClick={() => setVisible(!visible)}>
                Login with Email
              </p>
            </div>

            <button type="submit">Proceed</button>
          </form>
        ) : (
          // End Login with OTP
          // Start Login with email
          <form onSubmit={LoginUser}>
            <div className="form-group mb-3">
              <label>Email or Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone Number"
                name="email"
                onChange={getFormData}
              />
            </div>
            {existUser === true ? (
              <p className="text-danger">
                This phone number or email is not registered with us.
              </p>
            ) : (
              ""
            )}

            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={getFormData}
                required
              />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 remember-me-wrap">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember-me"
                  />
                  <label className="form-check-label" htmlFor="remember-me">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 lost-your-password-wrap">
                <a
                  href="#"
                  className="lost-your-password"
                  onClick={() => setShow(true)}
                >
                  Lost your password?
                </a>
              </div>
              <div className="text-end  ">
                <p role="button" onClick={() => setVisible(!visible)}>
                  Login with OTP
                </p>
              </div>
            </div>
            <button type="submit">Log In</button>
          </form>
          // End Login with email
        )}
      </div>

      {/* start Modal for Forgot password */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        animation={false}
        size="sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendOtp}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                value={enterNumber}
                placeholder="Enter Registered Phone Number"
                onChange={(e) => getNumber(e)}
                maxLength="10"
              />
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100">
              SEND OTP
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* End Modal for Forgot password */}

      {/* start Modal for OTP Verification */}
      <Modal
        show={showOtp}
        // onHide={() => setShowOtp(false)}
        animation={false}
        size="sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>OTP Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={verifyOtp}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                value={otpRegexValue}
                placeholder="Enter OTP"
                onChange={(e) => getOtpData(e)}
                maxLength="6"
              />
              <Form.Text className="text-muted">
                We have sent OTP to your number.
              </Form.Text>
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100">
              SUBMIT
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* End Modal for OTP verification */}

      {/* start Modal for change password */}
      <Modal
        show={showPassword}
        onHide={() => setShowPassword(false)}
        animation={false}
        size="sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={forgetPassword}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                maxLength="15"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                maxLength="15"
              />
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100">
              Change Password
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* End Modal for change password */}

      {/* start Modal for OTP Login Verification */}
      <Modal
        show={showLoginOtp}
        // onHide={() => setShowOtp(false)}
        animation={false}
        size="sm"
      >
        <Modal.Header>
          <Modal.Title>OTP Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={loginOtpVerification}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                value={loginOtpRegex}
                placeholder="Enter OTP"
                onChange={(e) => getLoginOtpData(e)}
                maxLength="6"
              />
              <Form.Text className="text-muted">
                We have sent OTP to your number.
              </Form.Text>
              <br />
              {rightOTP ? (
                <Form.Text className="text-danger">Wrong OTP</Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100">
              SUBMIT
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* End Modal for OTP Login verification */}

      <ToastContainer />
    </>
  );
};

export default LoginForm;
