import React, { useEffect, useState } from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageTitle from "../components/Common/PageTitle";
import { Button, Modal } from "react-bootstrap";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/_App/Footer";
import { HiOutlineCamera } from "react-icons/hi";
import Link from "next/link";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import useAxios from "../components/Hooks/useAxios";
import setHeader from "../components/Hooks/axiosInstance";
import Lottie from "react-lottie";
import animationData from "../lottie/order.json";
import loaderData from "../lottie/loader.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiRupee } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";
import UncontrolledTabs from "react-tabs/lib/components/UncontrolledTabs";
const Cart = () => {
  // Start Set cookies in header
  axios.defaults.headers.common["Authorization"] = setHeader();
  //End Set Cookies in Header
  const [orderDetails, setOrderDetails] = useState([]);
  const [show, setShow] = useState("none");
  const [review, setReview] = useState("");
  const [open, setOpen] = useState();
  const [visible, setVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState([]);
  const [ratingChanged, setRatingChanged] = useState("");
  const cookies = new Cookies();
  const uid = cookies.get("pid");
  const router = useRouter();
  const getPath = router.asPath;
  const id = getPath.slice(18);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    speed: 1,
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

  // Start Notification Code
  const Notification = (type) => {
    switch (type) {
      case "success":
        toast.success("Review Added Successfully !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
    }
  };
  // End  Notification Code

  const getOrderDetails = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "api/booking/getbookingDetail",
        data: {
          booking_id: id,
        },
      });
      setOrderDetails(response.data.resultPosts);
    } catch (err) {
      console.log(err);
    }
  };

  const cancelOrder = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "api/booking/cancel",
        data: {
          booking_id: id,
          cancel: "cancelled",
        },
      });
      getOrderDetails();
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setVisible(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getOrderDetails();
  }, []);

  const postReview = async (e, pId) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "/api/reviewnew/add",
        data: {
          user_id: uid,
          product_id: pId,
          booking_id: id,
          review: `${review}`,
          rating: ratingChanged,
          images: imageUrl,
        },
      });
      setReview("");
      setImageUrl([]);
      Notification("success");
    } catch (err) {
      console.error(err);
    }
  };

  // Start Upload multiple file for review
  const uploadMultipleImage = async (e) => {
    // const file = e.target.files;
    // const formData = new FormData();
    // for (let i = 0; i < file.length; i++) {
    //   formData.append("file[]", file[i]);
    // }
    const files = e.target.files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }

    try {
      const response = await axios({
        method: "POST",
        url: "/api/product/uploadProductReviewPictures",
        data: formData,
      });
      setImageUrl(response.data.productPictures);
    } catch (err) {
      console.log(err);
    }
  };
  // End Upload multiple file for review

  return (
    <>
      <style jsx>{`
        .orderBtn {
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
      <TopHeader />
      <Navbar />
      <PageTitle
        pageTitle="Order Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Order Details"
      />
      {orderDetails.length > 0 ? (
        <div className="cart-area ptb-100">
          <div className="container">
            <div className="row">
              {/* Start my order section */}
              <div className="col-lg-8 col-sm-12 col-md-12">
                {/* Start Id and Date Details */}
                <div>
                  <div
                    className="mb-3"
                    style={{
                      backgroundColor: "#F8F8F8",
                      padding: "10px 20px",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <span style={{ fontWeight: "600" }}>
                        {orderDetails[0] && orderDetails[0].transactionid}
                      </span>
                      <span className="text-success">
                        {orderDetails[0] && orderDetails[0].orderstatus}
                      </span>
                    </div>
                    <div style={{ color: "#787878" }}>
                      <span>
                        {orderDetails[0] && orderDetails[0].updatedOn}
                      </span>
                      <p>
                        Thanks for using spicywhips - We hope to see you again
                      </p>
                    </div>
                  </div>
                  {/* End Id and Date Details */}
                  {/* Start name & address Details */}
                  <div
                    className="mb-3"
                    style={{
                      backgroundColor: "#F8F8F8",
                      padding: "10px 20px",
                      borderRadius: "10px",
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: "600" }}>
                        {orderDetails[0] && orderDetails[0].addressId.firstName}{" "}
                        {orderDetails[0] && orderDetails[0].addressId.lastName}
                      </span>
                    </div>
                    <div
                      className="d-flex flex-column"
                      style={{ color: "#787878" }}
                    >
                      <span>
                        {orderDetails[0] && orderDetails[0].addressId.address}
                      </span>
                      <span>
                        {orderDetails[0] && orderDetails[0].addressId.city},
                        {orderDetails[0] && orderDetails[0].addressId.pincode}
                      </span>
                      <span>
                        {orderDetails[0] && orderDetails[0].addressId.phone}
                      </span>
                    </div>
                  </div>
                  {/* End  name & address Details */}

                  {orderDetails[0] &&
                    orderDetails[0].cartId.map((items, index) => {
                      const id = items.productId._id;
                      const slug = items.productId.slug;
                      const totalPrice =
                        items.cartId.price * items.cartId.quantity;

                      return (
                        <div
                          className="row mb-3"
                          style={{
                            backgroundColor: "#F8F8F8",
                            padding: "10px 20px",
                            borderRadius: "10px",
                          }}
                          key={index}
                        >
                          <div className="col-2 ">
                            <span style={{ fontWeight: "600" }}>
                              <img
                                src={
                                  items && items.cartId && items.cartId.image
                                }
                                width="100"
                                height="100"
                              />
                            </span>
                          </div>
                          <div className="col-8">
                            <div
                              className="d-flex flex-column"
                              style={{ color: "#787878" }}
                            >
                              <span>
                                {items &&
                                  items.productId &&
                                  items.productId.name}{" "}
                                x {items?.cartId?.quantity}
                              </span>
                              <span>
                                Size:{" "}
                                {items && items.cartId && items.cartId.size}{" "}
                                Fabric:{" "}
                                {items && items.cartId && items.cartId.fabric}
                              </span>
                              <span>
                                <div className="d-flex products-color">
                                  <span>Colors:</span>
                                  <span
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      marginLeft: "10px",
                                      marginTop: "2px",
                                      backgroundColor: `${
                                        items &&
                                        items.cartId &&
                                        items.cartId.color
                                      }`,
                                    }}
                                  ></span>
                                </div>
                              </span>
                              <span style={{ color: "#000" }}>
                                Rate this products
                              </span>
                              <ReactStars
                                count={5}
                                onChange={(e) => {
                                  setRatingChanged(e);
                                  setOpen(index);
                                  setShow("block");
                                }}
                                size={24}
                                activeColor="#ffd700"
                                isHalf={true}
                              />
                              {open == index ? (
                                <div>
                                  <form
                                    onSubmit={(e) => postReview(e, id)}
                                    className="text-align-center"
                                    style={{ display: `${show}` }}
                                  >
                                    <textarea
                                      className="w-100"
                                      onChange={(e) =>
                                        setReview(e.target.value)
                                      }
                                      value={review}
                                    ></textarea>
                                    <button
                                      className="float-end btn-primary rounded"
                                      style={{ boxShadow: "none" }}
                                    >
                                      SUBMIT
                                    </button>
                                  </form>
                                  <div className="d-flex justify-between">
                                    {imageUrl?.map((items, index) => {
                                      return (
                                        <div
                                          style={{
                                            backgroundImage: `url(${items.img})`,
                                            width: "45px",
                                            height: "40px",
                                            marginRight: "5px",
                                            backgroundSize: "cover",
                                          }}
                                          key={index}
                                        />
                                      );
                                    })}

                                    {/* Start Image upload code */}
                                    <div
                                      className="border"
                                      style={{
                                        width: "45px",
                                        height: "40px",
                                        position: "relative",
                                        backgroundColor: "#ccc",
                                      }}
                                    >
                                      <span>
                                        <HiOutlineCamera
                                          style={{
                                            fontSize: "25px",
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                          }}
                                        />
                                      </span>
                                      <input
                                        type="file"
                                        accept="image/*"
                                        name="file"
                                        onChange={uploadMultipleImage}
                                        multiple="multiple"
                                        style={{
                                          width: "50px",
                                          opacity: "0",
                                          border: "1px solid red",
                                        }}
                                      />
                                    </div>
                                    {/* End Image upload code */}
                                  </div>
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          <div className="col-2">
                            <p className="text-danger">
                              <BiRupee style={{ marginTop: "-4px" }} />
                              {totalPrice}
                            </p>
                            <Link href={`product/gold/${slug}`}>
                              <p role="button">DETAILS</p>
                            </Link>
                          </div>
                        </div>
                      );
                    })}

                  {orderDetails[0].orderstatus == "pending" ? (
                    <div className="text-center">
                      <button
                        className="btn btn-danger w-25"
                        onClick={() => setVisible(!visible)}
                      >
                        Cancel Order
                      </button>
                    </div>
                  ) : null}

                  {/* End  products Details */}
                </div>
              </div>
              {/* End my order section */}
              <div className="col-lg-4 col-sm-12 col-md-12">
                <Lottie options={defaultOptions} height={400} width={400} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Lottie options={loaderOptions} height={400} width={400} />
      )}

      <Modal
        show={visible}
        onHide={() => setVisible(!visible)}
        animation={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Are you sure you want to cancel this product !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setVisible(!visible)}>
            NO
          </Button>
          <Button variant="danger" onClick={() => cancelOrder()}>
            YES
          </Button>
        </Modal.Footer>
      </Modal>

      <SubscribeForm />

      <Footer />
      <ToastContainer />
    </>
  );
};

export default Cart;
