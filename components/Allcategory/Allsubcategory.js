import React, { useEffect, useState, useRef } from "react";
import Cookies from "universal-cookie";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Lottie from "react-lottie";
import commingSoon from "../../lottie/commingsoon.json";
import GET_WISHLIST_LENGTH from "../Redux/Action/getwishlistlength.action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SkeletonLoaderCategory from "../../pages/SkeletonLoaderCategory";
import useAxios from "../Hooks/useAxios";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
const Allsubcategory = () => {
  const [products, setProducts] = useState([]);
  const [paginationCount, setPaginationCount] = useState();
  const [totalProduct, setTotalProduct] = useState();

  const [width, setWidth] = useState();
  const cookies = new Cookies();
  const uid = cookies.get("pid");
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const response = useSelector((response) => response);
  const router = useRouter();
  const path = router.asPath;
  const color = path.split("=")[1];
  const subcat = router.query["subcat"];
  const deps = response.GET_PRODUCTS_BY_SEARCH;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: commingSoon,
    speed: 0.5,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Start Notification Code
  const Notification = (type) => {
    switch (type) {
      case "success":
        toast.success("Successfully added to wishlist !", {
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

  // Start Pagination Count loop
  var pagesArray = [];
  for (var i = 1; i <= paginationCount; i++) {
    pagesArray.push(i);
  }
  // End  Pagination Count loop

  // Start Code for Sorting Products
  // const sortingPrice = async (e) => {
  //   const sort_key = e.target.value;

  //   try {
  //     const response = await axios({
  //       method: "POST",
  //       url: "api/product/subcat/price/sortslug",
  //       data: {
  //         subcategorySlug: subcat,
  //         sort_key: sort_key,
  //       },
  //     });
  //     {
  //       sort_key === "def" ? null : setProducts(response.data.Products);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // End Code for Sorting Products

  //  Start code to add wishlist
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
  // Start get product by subcategory
  const getProductsBySubcategory = async ({ paginationNumber, sortKey }) => {
    setProducts(undefined);
    setCount(paginationNumber);
    try {
      const response = await axios({
        method: "POST",
        url: "/api/product/subcatwebslugfilter/",
        data: {
          subcategorySlug: subcat,
          color: color,
          pageno: paginationNumber,
          sort_key: sortKey,
        },
      });
      setPaginationCount(response?.data?.pagination_count);
      setProducts(response.data.Products);
      setTotalProduct(response.data.total_product);
    } catch (err) {
      console.error(err);
    }
  };
  // End get product by subcategory

  // For Pagination forward & backward
  const increment = () => {
    if (count <= pagesArray.length) {
      getProductsBySubcategory({ paginationNumber: count + 1 });
    } else {
      return false;
    }
  };

  const decrement = () => {
    if (count >= 0) {
      getProductsBySubcategory({ paginationNumber: count - 1 });
    }
  };
  // For Pagination forward & backward

  useEffect(() => {
    dispatch(GET_WISHLIST_LENGTH(uid));
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setProducts(undefined);
    getProductsBySubcategory({ paginationNumber: 0 });
  }, [subcat, color]);

  // useEffect(() => {
  //   getProductsBySubcategory();
  // }, [color]);

  useEffect(() => {
    setProducts(response.GET_PRODUCTS_BY_SEARCH.data.result);
  }, [deps]);

  // Start Lazy Load scroll-based image loading technique
  const LazyLoadImage = ({ src, placeholderSrc }) => {
    const imageRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load the actual image
            imageRef.current.src = imageRef.current.dataset.src;
            observer.unobserve(imageRef.current);
          }
        });
      });

      observer.observe(imageRef.current);

      return () => {
        if (imageRef.current) {
          observer.unobserve(imageRef.current);
        }
      };
    }, []);
    // End Lazy Load scroll-based image loading technique
    return (
      <img
        ref={imageRef}
        src={placeholderSrc}
        data-src={src}
        alt="Lazy-loaded Image"
      />
    );
  };

  return (
    <>
      <div>
        <div className="dravo-grid-sorting row align-items-center">
          <div className="col-lg-6 col-md-6 result-count">
            <div className="d-flex align-items-center" id="sort">
              <p>
                We found <span className="count">{totalProduct}</span> products
                available for you
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 ordering">
            <div className="select-box">
              <label>Sort By:</label>
              <select
                onChange={(e) => {
                  getProductsBySubcategory({ sortKey: e.target.value });
                }}
              >
                <option value="asc">Default</option>
                <option value="asc">Price: low to high</option>
                <option value="desc">Price: high to low</option>
              </select>
            </div>
          </div>
        </div>

        {products != undefined ? (
          products.length != 0 ? (
            <div className="row align-items-center">
              {products &&
                products.map((data, index) => {
                  const id = data._id;
                  return (
                    <div className="col-lg-4 col-md-4 col-sm-4" key={index}>
                      <div className="single-products-box">
                        <Link href={`/product/gold/${products[index].slug}`}>
                          <a className="d-block">
                            <LazyLoadImage
                              src={data?.image}
                              placeholderSrc={
                                subcat === "men" ? "/boy.jpg" : "/girl.jpg"
                              }
                            />
                          </a>
                        </Link>
                        <ul className="products-button">
                          <li onClick={() => addToWishlist(id)}>
                            <a href="javascript:void(0)">
                              <i className="far fa-heart"></i>
                              <span className="tooltip-label">
                                Add to Wishlist
                              </span>
                            </a>
                          </li>
                        </ul>
                        <span className="sale">SALE</span>
                      </div>
                      <div
                        className="content mb-4 p-2"
                        style={{
                          backgroundColor: "#f5f5f5",
                          marginTop: "-25px",
                        }}
                      >
                        <h6>
                          <Link href={`/product/gold/${data.slug}`}>
                            <a>{data && data.name}</a>
                          </Link>
                        </h6>
                        <div className="d-flex justify-content-between">
                          <div className="price">
                            <span className="new-price">
                              ₹{data && data?.price}
                            </span>
                          </div>
                          <Link href={`/product/gold/${data.slug}`}>
                            <a
                              className="add-to-cart-btn"
                              style={{ fontSize: "14px" }}
                            >
                              View Details <i className="fas fa-eye"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                <div className="pagination-area">
                  <div className="nav-links">
                    <a
                      role="button"
                      className="previous page-numbers"
                      title="Next Page"
                      onClick={() => {
                        decrement();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <i className="fas fa-arrow-left"></i>
                    </a>
                    {/* <span className="page-numbers current">1</span> */}

                    {pagesArray?.map((data, index) => {
                      return (
                        <a
                          href="javascript:void(0)"
                          className="page-numbers"
                          onClick={() => {
                            getProductsBySubcategory({
                              paginationNumber: index,
                            });
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          key={index}
                          style={{ color: count == index ? "red" : "" }}
                        >
                          {data}
                        </a>
                      );
                    })}
                    <a
                      role="button"
                      id="filter"
                      className="next page-numbers"
                      title="Next Page"
                      onClick={() => {
                        increment();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <Lottie options={defaultOptions} height={400} width={400} />

              <h4>
                Stay Tuned - We are currently unable to offer this product
              </h4>
            </div>
          )
        ) : (
          <SkeletonLoaderCategory />
        )}

        {width > 520 ? (
          ""
        ) : (
          <div>
            <div
              className="grid sticky proportionalDivisionView  d-flex justify-content-around  position-fixed bottom-0 w-100"
              style={{ backgroundColor: "#ffffff", zIndex: "9999" }}
            >
              <div className="column_1_2">
                <div className="ripple-container text-center">
                  <a href="#sort">
                    <button className="btn default">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="result-icon"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h24v24H0z" opacity="0.05"></path>
                          <path
                            fill="#282C3F"
                            d="M7.445 7.48V5.672L5.665 7.48h1.78zm1.09-4.42c.304.12.465.39.465.706v16.437a.784.784 0 01-.783.797.762.762 0 01-.772-.781V8.982H4.003a.832.832 0 01-.765-.204.759.759 0 01.002-1.105L7.652 3.23a.832.832 0 01.882-.17zm8.02 15.269l1.78-1.81h-1.78v1.81zm4.207-3.107a.76.76 0 01-.002 1.106l-4.412 4.442a.832.832 0 01-.882.17c-.305-.12-.466-.39-.466-.706V3.797c0-.432.332-.797.783-.797.45 0 .772.35.772.781v11.237h3.442a.833.833 0 01.765.204z"
                          ></path>
                        </g>
                      </svg>
                      SORT
                    </button>
                  </a>
                </div>
              </div>
              <div className="buttonDivider"></div>
              <div className="column_1_2">
                <div className="ripple-container ">
                  <a href="#filter">
                    <button className="btn default">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="result-icon"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h24v24H0z" opacity="0.05"></path>
                          <path
                            fill="#282C3F"
                            d="M3.749 7.508a.75.75 0 010-1.5h3.138a2.247 2.247 0 014.243 0h9.121a.75.75 0 010 1.5h-9.126a2.248 2.248 0 01-4.232 0H3.749zm13.373 9h3.129a.75.75 0 010 1.5h-3.135a2.247 2.247 0 01-4.231 0H3.749a.75.75 0 010-1.5h9.13a2.248 2.248 0 014.243 0z"
                          ></path>
                        </g>
                      </svg>
                      FILTER
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <ToastContainer />
    </>
  );
};

export default Allsubcategory;
