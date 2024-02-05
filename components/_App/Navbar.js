import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "universal-cookie";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import GET_ALL_CATEGORY from "../Redux/Action/getallcategory.action";
import useAxios from "../Hooks/useAxios";
import { useRouter } from "next/router";
const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const [category, setCategory] = useState();
  const [subCatMen, setSubCatMen] = useState();
  const [subCatWomen, setSubCatWomen] = useState();
  const [wishlistLength, setWishlistLength] = useState();
  const [isFocus, setIsFocus] = useState(false);
  const router = useRouter();
  const [width, setWidth] = useState();
  const [cartLength, setCartLength] = useState();
  const response = useSelector((response) => response);
  const wishlength = response.GET_WISHLIST_LENGTH.data.wishlistcount;
  const cartCount = response.GET_CART_LENGTH.data.cartCount;
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const auth = cookies.get("Auth");
  const uid = cookies.get("pid");
  const path = router.pathname;

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Start GET SubCategory Men by Category
  const subCategoryMen = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "api/subcategory/get/supercategory",
        data: {
          supercategoryId: "62870362998b2d5529a836ea",
        },
      });
      setSubCatMen(response.data.result);
    } catch (err) {
      console.error(err);
    }
  };
  // End GET SubCategory Men by Category

  // Start GET SubCategory Women by Category
  const subCategoryWomen = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "api/subcategory/get/supercategory",
        data: {
          supercategoryId: "6287037d998b2d5529a836ec",
        },
      });
      setSubCatWomen(response.data.result);
    } catch (err) {
      console.error(err);
    }
  };
  // End GET SubCategory Women by Category

  // Start  wishlist length
  const WishlistLength = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `api/user/getWishlistLength/${uid}`,
      });
      setWishlistLength(response.data.wishlistcount);
    } catch (err) {
      console.error(err);
    }
  };
  // End wishlist length

  // Start  cart length
  const getCartLength = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `api/user/getCartLength/${uid}`,
      });
      setCartLength(response.data.cartCount);
    } catch (err) {
      console.error(err);
    }
  };
  // End cart length

  useEffect(() => {
    subCategoryMen();
    subCategoryWomen();
    WishlistLength();
    getCartLength();
    dispatch(GET_ALL_CATEGORY());
    setWidth(window.innerWidth);
    return () => {};
  }, []);

  useEffect(() => {
    setCategory(response.GET_ALL_CATEGORY.data.categories);
    return () => {};
  }, [response]);

  useEffect(() => {
    setWishlistLength(
      response &&
        response.GET_WISHLIST_LENGTH &&
        response.GET_WISHLIST_LENGTH.data.wishlistcount
    );
  }, [wishlength]);

  useEffect(() => {
    setCartLength(
      response &&
        response.GET_CART_LENGTH &&
        response.GET_CART_LENGTH.data.cartCount
    );
  }, [cartCount]);

  const searchValue = (e) => {
    router.replace("search?q=" + e);
  };

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a onClick={toggleNavbar} className="navbar-brand">
                  <img
                    className="logoSpicy"
                    src="/images/logo.png"
                    alt="logo"
                  />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link">HOME</a>
                    </Link>
                  </li>

                  <li className="nav-item megamenu">
                    <Link href="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        SHOP
                      </a>
                    </Link>

                    <ul className="dropdown-menu w-50">
                      <li className="nav-item">
                        <div className="row">
                          <div className="col">
                            <h6 className="submenu-title">SHOP BY</h6>
                            <ul className="megamenu-submenu">
                              {category &&
                                category.map((item, index) => {
                                  return (
                                    <li key={index} onClick={toggleNavbar}>
                                      <Link href={`/allcategory/${item.slug}`}>
                                        <a>{item.name}</a>
                                      </Link>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/about">
                      <a className="nav-link">ABOUT</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/blog">
                      <a className="nav-link">BLOG</a>
                    </Link>

                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blog" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Blog Grid
                          </a>
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        CONTACT
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <div className="search-box">
                    {width > 520 ? (
                      <input
                        type="text"
                        className="input-search"
                        placeholder="Search for products"
                        onClick={() => router.push("/search?q=all")}
                        onChange={(e) => searchValue(e.target.value)}
                        autoFocus={path == "/search" ? true : false}
                      />
                    ) : (
                      ""
                    )}

                    <button onClick={() => router.push("/search?q=all")}>
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
                <div className="option-item">
                  <Link href="/profile-authentication">
                    <a className="user-account">
                      <i className="far fa-user"></i>
                    </a>
                  </Link>
                </div>
                {auth != undefined ? (
                  <div className="option-item">
                    <Link href="/wishlist">
                      <a className="wishlist-btn">
                        <i className="far fa-heart"></i>
                        <span>{wishlistLength}</span>
                      </a>
                    </Link>
                  </div>
                ) : (
                  " "
                )}

                {auth != undefined ? (
                  <div className="option-item">
                    <Link href="/cart">
                      <a className="cart-btn">
                        <i className="fas fa-shopping-cart"></i>
                        <span>{cartLength}</span>
                      </a>
                    </Link>
                  </div>
                ) : (
                  " "
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
