import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";
resetIdCounter();
import axios from "axios";
import { Button } from "react-bootstrap";
import useAxios from "../Hooks/useAxios";
import setHeader from "../Hooks/axiosInstance";
import Cookies from "universal-cookie";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import GET_WISHLIST_LENGTH from "../Redux/Action/getwishlistlength.action";
import LOGOUT_CHECK from "../Redux/Action/logout.action";
import { ToastContainer, toast } from "react-toastify";
import SkeletonLoader from "../../pages/skeleton";
import "react-toastify/dist/ReactToastify.css";
const FeaturedProductsTabs = () => {
  // Start Set cookies in header
  axios.defaults.headers.common["Authorization"] = setHeader();
  //End Set Cookies in Header
  const dispatch = useDispatch();
  const response = useSelector((response) => response);
  const cookies = new Cookies();
  const uid = cookies.get("pid");
  const auth = cookies.get("Auth");
  const [categoryData, setCategoryData] = useState({});
  const [AllCategoryProduct, setAllCategoryProduct] = useState([]);
  const [productsByCategory, setProductByCategory] = useState([]);
  const [checkLength, setCheckLength] = useState(0);
  //  Start Category coding
  const getCategory = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/category/getcategory",
      });
      setCategoryData(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  //  End Category coding
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

  // Start All menu product data
  const AllCategoryData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/product/getallwebv2/",
      });
      setAllCategoryProduct(response.data);
      setCheckLength(response.data.length);
    } catch (err) {
      console.error(err);
    }
  };
  // End All Menu product data

  // Start Getting products according Category

  const getProductsByCategory = async (categoryId) => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/product/supercatwebv2",
        data: { supercategoryId: categoryId },
      });
      console.log(response.data, "polo");
      setProductByCategory(response.data);
      setCheckLength(response.data.length);
    } catch (err) {
      console.error(err);
    }
  };
  // Start Getting products according Category

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
    const status = response.LOGOUT_CHECK.data.checktoken;
    if (status === true) {
      cookies.remove("eid");
      cookies.remove("pid");
      cookies.remove("Auth");
      router.push("/");
    }
  }, [response.LOGOUT_CHECK.data.checktoken]);

  useEffect(() => {
    getCategory();
    AllCategoryData();
    dispatch(LOGOUT_CHECK(auth));
    return () => {};
  }, []);

  // Start Design Code for ALL category
  const AllCategory = ({ data, index }) => {
    const design = (
      <>
        <div className="col-lg-4 col-md-6 col-sm-6 mb-2">
          <div className="single-products-item">
            <div className="image">
              <Link href={`/product/gold/${data.slug}`}>
                <a className="d-block">
                  <img
                    src={data?.image}
                    alt="products-image"
                    width="416px"
                    height="228px"
                  />
                </a>
              </Link>
              <ul className="products-button">
                {/* <li>
                  <a href="#">
                    <i className="fas fa-search-plus"></i>
                    <span className="tooltip-label">Quick View</span>
                  </a>
                </li> */}

                <li onClick={() => addToWishlist(data._id)}>
                  <a href="javascript:void(0)">
                    <i className="far fa-heart"></i>
                    <span className="tooltip-label">Add to Wishlist</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="content">
              <h3>
                <Link href={`/product/gold/${data.slug}`}>
                  <a>{data.name}</a>
                </Link>
              </h3>
              <Link href={`/product/gold/${data.slug}`}>
                <a className="add-to-cart-btn">
                  View Details <i className="fas fa-eye"></i>
                </a>
              </Link>
              <div className="price d-flex">
                <BiRupee style={{ marginTop: "4px" }} />
                <span className="new-price">{data?.price}</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
    return design;
  };
  // End Design Code for ALL category

  // Start Design Code for Men category
  const GetProductsByCategory = ({ data }) => {
    const designs = (
      <>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="single-products-item">
            <div className="image">
              <Link href={`/product/gold/${data.slug}`}>
                <a className="d-block">
                  <img src={data?.image} alt="products-image" />
                </a>
              </Link>

              <ul className="products-button">
                {/* <li>
                  <a href="#">
                    <i className="fas fa-search-plus"></i>
                    <span className="tooltip-label">Quick View</span>
                  </a>
                </li> */}

                <li onClick={() => addToWishlist(data._id)}>
                  <a href="javascript:void(0)">
                    <i className="far fa-heart"></i>
                    <span className="tooltip-label">Add to Wishlist</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="content">
              <h3>
                <Link href={`/product/gold/${data.slug}`}>
                  <a>{data && data.name}</a>
                </Link>
              </h3>
              <Link href={`/product/gold/${data.slug}`}>
                <a className="add-to-cart-btn">
                  View details <i className="fas fa-eye"></i>
                </a>
              </Link>
              <div className="price d-flex">
                <BiRupee style={{ marginTop: "4px" }} />
                <span className="new-price">{data?.price}</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
    return designs;
  };
  // End Design Code for Men category

  return (
    <>
      <div className="products-area pt-100 pb-70 bg-f5f5f5">
        <div className="container">
          <div className="section-title style-two">
            <h2>Our Featured Products</h2>
            <p>
              Spicywhips offers a diverse selection of t-shirts, including full
              sleeve and oversize options, for men and women. Our unique designs
              and high-quality materials ensure both comfort and durability.
              Shop our collection for a bold statement or everyday essential..
            </p>
          </div>

          <Tabs className="products-tabs">
            <div className="style-two">
              <TabList>
                <Tab style={{ marginBottom: "5px" }}>ALL</Tab>
                {categoryData &&
                  categoryData.categories &&
                  categoryData.categories.slice(0, 2).map((data, index) => {
                    return (
                      <Tab
                        key={index}
                        onClick={() => {
                          setCheckLength(0);
                          getProductsByCategory(`${data._id}`);
                        }}
                        style={{ marginBottom: "5px" }}
                      >
                        {data.name}
                      </Tab>
                    );
                  })}
              </TabList>
            </div>

            <TabPanel>
              {checkLength != 0 ? (
                <div className="row justify-content-center">
                  {AllCategoryProduct &&
                    AllCategoryProduct.Products &&
                    AllCategoryProduct.Products.map((items, index) => {
                      return (
                        <AllCategory data={items} index={index} key={index} />
                      );
                    })}
                </div>
              ) : (
                <SkeletonLoader />
              )}
            </TabPanel>

            <TabPanel>
              {checkLength != 0 ? (
                <>
                  <div className="row justify-content-center">
                    {productsByCategory &&
                      productsByCategory.Products &&
                      productsByCategory.Products.map((item, index) => {
                        return (
                          <GetProductsByCategory data={item} key={index} />
                        );
                      })}
                  </div>
                  <Link href="/allcategory/men/">
                    <div className="text-center">
                      <Button className="btn btn-warning ">View more</Button>
                    </div>
                  </Link>
                </>
              ) : (
                <SkeletonLoader />
              )}
            </TabPanel>

            <TabPanel>
              {checkLength != 0 ? (
                <>
                  <div className="row justify-content-center">
                    {productsByCategory &&
                      productsByCategory.Products &&
                      productsByCategory.Products.map((item, index) => {
                        return (
                          <GetProductsByCategory data={item} key={index} />
                        );
                      })}
                  </div>

                  <Link href="/allcategory/women/">
                    <div className="text-center">
                      <Button className="btn btn-warning ">View more</Button>
                    </div>
                  </Link>
                </>
              ) : (
                <SkeletonLoader />
              )}
            </TabPanel>

            {/* <TabPanel>
              {checkLength != 0 ? (
                <div className="row justify-content-center">
                  {productsByCategory &&
                    productsByCategory.Products &&
                    productsByCategory.Products.map((item, index) => {
                      return <GetProductsByCategory data={item} key={index} />;
                    })}
                </div>
              ) : (
                <SkeletonLoader />
              )}
            </TabPanel>

            <TabPanel>
              {checkLength != 0 ? (
                <div className="row justify-content-center">
                  {productsByCategory &&
                    productsByCategory.Products &&
                    productsByCategory.Products.map((item, index) => {
                      return <GetProductsByCategory data={item} key={index} />;
                    })}
                </div>
              ) : (
                <SkeletonLoader />
              )}
            </TabPanel>

            <TabPanel>
              {checkLength != 0 ? (
                <div className="row justify-content-center">
                  {productsByCategory &&
                    productsByCategory.Products &&
                    productsByCategory.Products.map((item, index) => {
                      return <GetProductsByCategory data={item} key={index} />;
                    })}
                </div>
              ) : (
                <SkeletonLoader />
              )}
            </TabPanel>

            <TabPanel>
              {checkLength != 0 ? (
                <div className="row justify-content-center">
                  {productsByCategory &&
                    productsByCategory.Products &&
                    productsByCategory.Products.map((item, index) => {
                      return <GetProductsByCategory data={item} key={index} />;
                    })}
                </div>
              ) : (
                <SkeletonLoader />
              )}
            </TabPanel> */}
          </Tabs>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default FeaturedProductsTabs;
