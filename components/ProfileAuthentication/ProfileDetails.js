import axios from "axios";
import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import passwordAnimation from "../../lottie/password.json";
import { ToastContainer, toast } from "react-toastify";
import LOGOUT_CHECK from "../Redux/Action/logout.action";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import Profileaddress from "./profileAddress";
import useAxios from "../Hooks/useAxios";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
const LoginForm = () => {
  const cookies = new Cookies();
  const uid = cookies.get("pid");
  const auth = cookies.get("Auth");
  const router = useRouter();
  const dispatch = useDispatch();
  const response = useSelector((response) => response);
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("d-none");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otpRegexValue, setOtpRegexValue] = useState("");
  const [wallet, setWallet] = useState("d-none");
  const [address, setAddress] = useState("d-none");
  const [number, setNumber] = useState("d-none");
  const [formData, setFormData] = useState({});
  const [show, setShow] = useState("none");
  const [disabled, setDisabled] = useState(true);
  const [alertShow, setAlertShow] = useState("d-none");
  const [phoneDisabled, setPhoneDisabled] = useState(true);
  const [isCorrect, setISCorrect] = useState("");
  const [rightOTP, setIsRightOTP] = useState("");
  const PasswordOptions = {
    loop: true,
    autoplay: true,
    animationData: passwordAnimation,
    speed: 1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const headerStyle = {
    textDecoration: "none",
    color: "#CF0018",
    boxShadow: "none",
  };
  // Start Logout API call
  const handleLogout = () => {
    cookies.remove("eid", { path: "/" });
    cookies.remove("pid", { path: "/" });
    cookies.remove("Auth", { path: "/" });
    cookies.remove("name", { path: "/" });
    router.push("/");
  };
  // End Logout API Call update

  useEffect(() => {
    dispatch(LOGOUT_CHECK(auth));
  }, []);

  useEffect(() => {
    const status = response.LOGOUT_CHECK.data.checktoken;
    if (status === true) {
      cookies.remove("eid");
      cookies.remove("pid");
      cookies.remove("Auth");
      router.push("/");
    }
  }, [response.LOGOUT_CHECK.data.checktoken]);

  const openClose = (type) => {
    switch (type) {
      case "changePassword":
        {
          password == "d-none" ? setPassword("d-block") : setPassword("d-none");
        }
        break;

      case "mywallet":
        {
          wallet == "d-none" ? setWallet("d-block") : setWallet("d-none");
        }
        break;

      case "myaddress":
        {
          address == "d-none" ? setAddress("d-block") : setAddress("d-none");
        }
        break;

      case "changeNumber":
        {
          number == "d-none" ? setNumber("d-block") : setNumber("d-none");
        }
        break;
    }
  };

  // Start Notification Code
  const Notification = (type) => {
    switch (type) {
      case "success":
        toast.success("Password Changed Successfully !", {
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

      case "otpsuccess":
        toast.success("Phone Number Changed Successfully !", {
          position: "top-right",
          autoClose: 3996,
        });
    }
  };
  // End  Notification Code

  // start Getting password field data
  const changePassword = (event) => {
    const value = event.target.value;
    const prop = event.target.name;
    setShow("none");
    return setFormData((oldData) => {
      return {
        ...oldData,
        [prop]: value,
      };
    });
  };
  // End Getting password field data

  // OTP Field Regex
  const getOtpData = (event) => {
    setIsRightOTP("");
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setOtpRegexValue(input);
    }
  };
  // OTP Field Regex

  // Start Api Call to change phone Number
  const changePhoneNumber = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "/api/user/changeMobileOtp",
        data: {
          phone: phone,
          user_id: uid,
        },
      });
      setOpen(true);
    } catch (err) {
      console.error(err);
    }
  };

  // End Api call to change phone Number

  // Start Verify Otp
  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "/api/verifychangemobileotp",
        data: {
          phone: phone,
          user_id: uid,
          otp: otpRegexValue,
        },
      });
      setOpen(false);
      Notification("otpsuccess");
    } catch (err) {
      console.error(err.response.data.messge);
      setIsRightOTP(err.response.data.messge);
    }
  };
  // End Verify Otp

  // Start Change password API
  const matchPasswordField = async (e) => {
    e.preventDefault();
    var text1 = formData.newpassword;
    var text2 = formData.password;
    var text3 = formData.Cpassword;
    try {
      if (text1 === text3) {
        const response = await axios({
          method: "POST",
          url: "api/user/changePassword",
          data: {
            user_id: uid,
            password: text2,
            newpassword: text1,
          },
        });
        openClose("changePassword");
        Notification("success");
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        setShow("block");
      }
    } catch (err) {
      console.log(err);
      setISCorrect(err.response.data.message);
    }
  };
  // End Change password API

  // Start Profile details
  const getProfile = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/user/userdetail",
        data: {
          user_id: uid,
        },
      });
      setName(response?.data.user.firstName);
      setEmail(response?.data.user.email);
      setPhone(response?.data?.user?.phone);
    } catch (err) {
      console.error(err);
    }
  };

  // End Profile Details

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "/api/user/updateNameEmail",
        data: {
          user_id: uid,
          name: name,
          email: email,
        },
      });
      setAlertShow("block");
      cookies.set("name", name, { path: "/" });
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <style jsx>{`
        .collapseHeader {
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

      <div className="row">
        <div className="col-12 col-md-8">
          <div id="accordion">
            {/* Start My Profile Collapsable */}
            <div className="card mb-2">
              <div
                className="card-header d-flex justify-content-between btn"
                id="headingThree"
                onClick={() => openClose("mywallet")}
              >
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={headerStyle}
                  >
                    My Profile
                  </button>
                </h5>
                <i
                  className="fas fa-angle-down"
                  style={{
                    fontSize: "24px",
                    marginTop: "8px",
                    color: "#CF0018",
                  }}
                ></i>
              </div>
              <div
                id="collapseThree"
                className={wallet}
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <div className="d-flex justify-content-end ">
                    <Button
                      className="btn btn-light"
                      onClick={() => setDisabled(false)}
                    >
                      Edit
                    </Button>
                  </div>
                  <form onSubmit={updateProfile}>
                    <label for="name">Name</label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      name="name"
                      id="name"
                      value={name}
                      disabled={disabled}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <label for="name">Email</label>
                    <input
                      type="email"
                      className="form-control mb-3"
                      name="Email"
                      id="Email"
                      value={email}
                      disabled={disabled}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <Alert
                      key="success"
                      variant="success"
                      className={alertShow}
                    >
                      Profile Updated
                    </Alert>

                    <button
                      className="default-btn pointer w-100 px-4 rounded"
                      type="submit"
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* End My Profile Collapsable */}

            {/* Start My address Collapsable */}
            <div className="card mb-2">
              <div
                className="card-header d-flex justify-content-between btn"
                id="headingThree"
                onClick={() => openClose("myaddress")}
              >
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={headerStyle}
                  >
                    My Address
                  </button>
                </h5>
                <i
                  className="fas fa-angle-down"
                  style={{
                    fontSize: "24px",
                    marginTop: "8px",
                    color: "#CF0018",
                  }}
                ></i>
              </div>
              <div
                id="collapseThree"
                className={address}
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <Profileaddress />
                </div>
              </div>
            </div>
            {/* End my address Collapsable */}

            {/* Start Order Collapsable */}
            <div className="card mb-2" style={{ backgroundColor: "#FDFDFD" }}>
              <Link href="/myorder">
                <div
                  className="card-header d-flex justify-content-between btn"
                  id="headingOne"
                >
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      style={headerStyle}
                      onClick={() => openClose("order")}
                    >
                      My Orders
                    </button>
                  </h5>

                  <i
                    className="fas fa-angle-down"
                    style={{
                      fontSize: "24px",
                      marginTop: "8px",
                      color: "#CF0018",
                    }}
                  ></i>
                </div>
              </Link>
            </div>
            {/* End Order Collapsable */}

            {/* Start Change Password Collapsable */}
            <div className="card mb-2">
              <div
                className="card-header d-flex justify-content-between btn"
                id="headingTwo"
                onClick={() => openClose("changePassword")}
              >
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={headerStyle}
                  >
                    Change Password
                  </button>
                </h5>
                <i
                  className="fas fa-angle-down"
                  style={{
                    fontSize: "24px",
                    marginTop: "8px",
                    color: "#CF0018",
                  }}
                ></i>
              </div>
              <div
                id="collapseTwo"
                className={password}
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body">
                  {isCorrect != "" ? (
                    <p className="text-danger">{isCorrect}</p>
                  ) : (
                    ""
                  )}
                  <form onSubmit={matchPasswordField}>
                    <input
                      type="password"
                      className="form-control mb-1"
                      placeholder="Current password"
                      name="password"
                      onChange={changePassword}
                    />

                    <input
                      type="password"
                      className="form-control mb-1"
                      placeholder="New Password"
                      name="newpassword"
                      onChange={changePassword}
                    />

                    <input
                      type="password"
                      className="form-control mb-2"
                      placeholder="Confirm Password"
                      name="Cpassword"
                      onChange={changePassword}
                    />
                    <span className="text-danger" style={{ display: show }}>
                      Password do not match
                    </span>
                    <button
                      className="default-btn pointer w-100 px-4 rounded"
                      type="submit"
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* End change password Collapsable */}

            {/* Start Change number Collapsable */}
            <div className="card mb-2">
              <div
                className="card-header d-flex justify-content-between btn"
                id="headingThree"
                onClick={() => openClose("changeNumber")}
              >
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={headerStyle}
                  >
                    Change Phone Number
                  </button>
                </h5>
                <i
                  className="fas fa-angle-down"
                  style={{
                    fontSize: "24px",
                    marginTop: "8px",
                    color: "#CF0018",
                  }}
                ></i>
              </div>
              <div
                id="collapseThree"
                className={number}
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <div className="d-flex justify-content-end ">
                    <Button
                      className="btn btn-light"
                      onClick={() => setPhoneDisabled(false)}
                    >
                      Edit
                    </Button>
                  </div>
                  <form onSubmit={changePhoneNumber}>
                    <label for="name">Phone Number</label>
                    <input
                      type="number"
                      className="form-control mb-2 mt-3"
                      placeholder="Enter New Phone Number"
                      value={phone}
                      name="phone"
                      disabled={phoneDisabled}
                      onChange={(e) => {
                        if (e.target.value.length <= 10) {
                          setPhone(e.target.value);
                        }
                      }}
                    />
                    <button
                      className="default-btn pointer w-100 px-4 rounded"
                      type="submit"
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* End Change number Collapsable */}
          </div>
          <div className="text-center mt-4" onClick={() => handleLogout()}>
            <button
              className="default-btn pointer w-50 px-4 rounded"
              onClick={() => handleLogout()}
            >
              LOGOUT
            </button>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <Lottie options={PasswordOptions} height={300} width={300} />
        </div>
      </div>

      {/* start Modal for OTP verification */}
      <Modal
        show={open}
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
              <br />
              {rightOTP != "" ? (
                <Form.Text className="text-danger">{rightOTP}</Form.Text>
              ) : (
                ""
              )}
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

export default LoginForm;
