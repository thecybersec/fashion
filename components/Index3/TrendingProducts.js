import React from "react";
import Link from "next/link";
import axios from "axios";
import Cookies from "universal-cookie";
import useAxios from "../Hooks/useAxios";
import { useEffect, useState } from "react";
import GET_WISHLIST_LENGTH from "../Redux/Action/getwishlistlength.action";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TrendingProducts = () => {
  const [trendingData, setTrendingData] = useState();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const uid = cookies.get("pid");
  //   Start GET Trending products
  const TrendingProducts = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/product/trending",
      });
      setTrendingData(response.data.Products);
    } catch (err) {
      console.log(err);
    }
  };
  //   End GET Trending products

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

  useEffect(() => {
    TrendingProducts();
  }, []);

  return (
    <>
      <div className="products-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="products-image">
                <img
                  src="/images/girl.jpg"
                  alt="Make a statement with this printed t-shirt"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="products-content">
                <h2>Trending Products</h2>
                <p>
                  Here’s a list of items that are piquing interest all over the
                  world. Shop the trends and hot brands at spicy whips
                </p>
                <div className="products-list">
                  <div className="row">
                    {/* {trendingData &&
                      trendingData.slice(0, 2).map((data, index) => (
                        <div className="col-lg-6 col-md-6 col-sm-6" key="index">
                          <div className="single-products-item">
                            <div className="image">
                              <Link href={`product/gold/${data.slug}`}>
                                <a className="d-block">
                                  <img
                                    src={
                                      data.goldattributes[0].color[0].images[0]
                                        .img
                                    }
                                    alt="products-image"
                                  />
                                </a>
                              </Link>
                              <ul className="products-button">
                                <li onClick={() => addToWishlist(data._id)}>
                                  <a href="javascript:void(0)">
                                    <i className="far fa-heart"></i>
                                    <span className="tooltip-label">
                                      Add to Wishlist
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="content">
                              <h3>
                                <Link href={`product/gold/${data.slug}`}>
                                  <a>{data && data.name}</a>
                                </Link>
                              </h3>
                              <Link href={`product/gold/${data.slug}`}>
                                <a className="add-to-cart-btn">
                                  View details <i className="fas fa-eye"></i>
                                </a>
                              </Link>
                              <div className="price">
                                <span className="new-price">
                                  ₹{" "}
                                  {
                                    data.goldattributes[0].color[0].fabric[0]
                                      .price
                                  }
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))} */}
                  </div>
                </div>

                <Link href="/allcategory/men">
                  <a className="link-btn">
                    <i className="fas fa-store"></i> VIEW ALL TRENDING PRODUCTS
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default TrendingProducts;
