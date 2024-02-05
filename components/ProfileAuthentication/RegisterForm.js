import React from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { IoAlertCircleOutline } from "react-icons/io";
import setHeader from "../Hooks/axiosInstance";
const RegisterForm = () => {
  // Start Set cookies in header
  axios.defaults.headers.common["Authorization"] = setHeader();
  //End Set Cookies in Header
  const [formData, setFormData] = useState({});
  const [show, setShow] = useState(false);
  const [otpRegexValue, setOtpRegexValue] = useState("");
  const [existUser, setExistUser] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();
  const [validationMessage, setValidationMessage] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumberLength, setPhoneNumberlength] = useState(0);
  const phone = formData.phone;
  const router = useRouter();
  const cookies = new Cookies();
  const productSlug = router.query["product"];
  const isBuy = router.query["isBuy"] ? true : false;
  //Start Get Signup Form Data Coding
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

  const addUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "api/signup",
        data: formData,
      });
      {
        response?.data?.status === 409
          ? setExistUser(true)
          : setExistUser(false);
      }

      {
        response.data.status == 200 ? setShow(true) : null;
      }
    } catch (err) {
      console.error(err);
      Notification("error");
    }
  };
  //   End Get Signup Form Data Coding

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
        toast.error("Signup Failed !", {
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
    }
  };
  // End  Notification Code

  const getOtpData = (event) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setOtpRegexValue(input);
    }
  };

  // Start Otp verification code
  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "/api/verifyotp",
        data: {
          phone: phone,
          otp: otpRegexValue,
        },
      });
      {
        response.data.status != 200 ? setShow(true) : setShow(false);
      }

      {
        response.data.status != 200
          ? Notification("wrongOtp")
          : Notification("success");
      }
      setOtpRegexValue("");
      const token = response?.data?.token;
      const uid = response?.data?.result?._id;
      const eid = response?.data?.result?.email;
      const name = response?.data?.result?.firstName;
      console.log(response.data);
      cookies.set("Auth", token, { path: "/", maxAge: "86400" });
      cookies.set("pid", uid, { path: "/", maxAge: "86400" });
      cookies.set("eid", eid, { path: "/", maxAge: "86400" });
      cookies.set("name", name, { path: "/", maxAge: "86400" });

      setTimeout(() => {
        if (productSlug != undefined && isBuy != true) {
          addToCart(uid, isBuy);
        } else if (productSlug != undefined && isBuy) {
          addToCart(uid, isBuy);
        } else {
          setTimeout(() => {
            router.push("/profile-authentication");
          }, 2000);
        }
      }, [2000]);
    } catch (err) {
      console.error(err);
    }
  };
  // End Otp verification code

  const validatePassword = () => {
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const symbolRegex = /[!\"?$%^&)]/;

    // Validate length
    if (password.length < minLength) {
      setValidationMessage(
        "The password should be at least eight characters long."
      );
      return;
    }

    // Validate uppercase letters
    if (!uppercaseRegex.test(password)) {
      setValidationMessage(
        "The password should contain at least one uppercase letter."
      );
      return;
    }

    // Validate lowercase letters
    if (!lowercaseRegex.test(password)) {
      setValidationMessage(
        "The password should contain at least one lowercase letter."
      );
      return;
    }

    // Validate numbers
    if (!numberRegex.test(password)) {
      setValidationMessage("The password should contain at least one number.");
      return;
    }

    // Validate symbols
    if (!symbolRegex.test(password)) {
      setValidationMessage(
        'The password should contain at least one symbol (!"?$%^&)].'
      );
      return;
    }

    // If all criteria are met, password is valid
    setValidationMessage("Password is valid!");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword();
  };

  return (
    <>
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={addUser}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              placeholder="Name"
              onChange={getFormData}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              onChange={getFormData}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="number"
              className="form-control"
              name="phone"
              value={phoneNumber}
              placeholder="Phone"
              pattern="[0-9\b]"
              required
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  getFormData(e);
                  setPhoneNumber(e.target.value);
                  setPhoneNumberlength(e.target.value.length);
                }
              }}
            />
            {existUser === true ? (
              <p className="text-danger">
                User already exists with this phone number
              </p>
            ) : (
              ""
            )}

            {phoneNumberLength < 10 ? (
              <p className="text-danger">
                Please enter a valid 10-digit mobile number.
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select
              className="form-control"
              onChange={getFormData}
              name="gender"
              required
            >
              <option>Select Option</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => {
                getFormData(e);
                handlePasswordChange(e);
              }}
            />
            {validationMessage && (
              <p className="text-danger">{validationMessage}</p>
            )}
          </div>
          <p className="description">
            The password should be at least eight characters long. To make it
            stronger, use upper and lower case letters, numbers, and symbols
            like ! " ? $ % ^ & )
          </p>
          {validationMessage != "" && phoneNumberLength === 10 ? (
            <button type="submit">Register</button>
          ) : (
            <Button className="btn btn-light" disabled>
              Register
            </Button>
          )}
        </form>
      </div>

      {/* start Modal for OTP verification */}
      <Modal
        show={show}
        // onHide={() => setShow(false)}
        animation={false}
        size="sm"
      >
        <Modal.Header>
          <Modal.Title>OTP Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={verifyOtp}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter OTP"
                value={otpRegexValue}
                onChange={(e) => getOtpData(e)}
                maxLength="6"
              />
              <Form.Text className="text-muted">
                We have sent OTP to your number.
              </Form.Text>
            </Form.Group>

            <Button variant="danger" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* End Modal for OTP verification */}
      <ToastContainer />
    </>
  );
};

export default RegisterForm;
