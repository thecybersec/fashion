import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import setHeader from "../Hooks/axiosInstance";
import { useRouter } from "next/router";
import useAxios from "../Hooks/useAxios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import GET_PRODUCTS_BY_SEARCH from "../Redux/Action/getproductsbysearch.action";
const Sidebar = () => {
  // Start Set cookies in header
  axios.defaults.headers.common["Authorization"] = setHeader();
  //End Set Cookies in Header

  const [subcategory, setSubCategory] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const supercat = router.query["supercat"];
  const subcat = router.query["subcat"];
  const [randProduct, setRandProduct] = useState();
  // Start get random products coding
  const getRandomProduct = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "api/product/getrandom",
      });
      setRandProduct(response.data.Products);
    } catch (err) {
      console.error(err);
    }
  };
  // End get random products coding

  const getSubCategory = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/subcategory/get/supercategoryslug",
        data: {
          supercategoryslug: supercat,
        },
      });
      setSubCategory(response.data.result);
    } catch (err) {
      console.error(err);
    }
  };

  // Start GEt products by search
  const getProductsBySearch = (e) => {
    const value = e.target.value;
    dispatch(GET_PRODUCTS_BY_SEARCH(value));
  };
  // End Get products by search

  useEffect(() => {
    if (supercat != undefined) {
      getSubCategory();
    }
    return () => {};
  }, [supercat]);

  useEffect(() => {
    if (subcategory != undefined) {
    }
    return () => {};
  }, [subcategory]);

  useEffect(() => {
    getRandomProduct();
  }, []);

  return (
    <>
      <aside className="widget-area">
        <div className="widget widget_search">
          <form className="search-form">
            <input
              type="search"
              className="search-field"
              placeholder="Search..."
              onChange={getProductsBySearch}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        {/* start Category Menu */}
        <div className="widget widget_categories">
          <h3 className="widget-title">
            <span>Categories</span>
          </h3>
          {subcategory != undefined ? (
            <ul>
              {subcategory &&
                subcategory.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href={`/allcategory/${supercat}/${item.slug}`}>
                        <a>{item.name}</a>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          ) : (
            <Skeleton duration={1.5} count={4} />
          )}
        </div>
        {/* End Category Menu */}

        <div className="widget widget_colors overflow">
          <h3 className="widget-title">
            <span>Filter By Color</span>
          </h3>
          <ul>
            <li>
              <Link
                href={
                  subcat != undefined
                    ? `/allcategory/${supercat}/${subcat}?color=#000000`
                    : `/allcategory/${supercat}?colors=#000000`
                }
              >
                <a>
                  <span className="black">Black</span>
                  <span>Black</span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={
                  subcat != undefined
                    ? `/allcategory/${supercat}/${subcat}?color=#ffffff`
                    : `/allcategory/${supercat}?colors=#ffffff`
                }
              >
                <a>
                  <span className="white">White</span>
                  <span>White</span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={
                  subcat != undefined
                    ? `/allcategory/${supercat}/${subcat}?color=#808080`
                    : `/allcategory/${supercat}?colors=#808080`
                }
              >
                <a>
                  <span className="gray">Gray</span>
                  <span>Gray</span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={
                  subcat != undefined
                    ? `/allcategory/${supercat}/${subcat}?color=#FF0000`
                    : `/allcategory/${supercat}?colors=#FF0000`
                }
              >
                <a>
                  <span className="red">Red</span>
                  <span>Red</span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={
                  subcat != undefined
                    ? `/allcategory/${supercat}/${subcat}?color=#FFFF00`
                    : `/allcategory/${supercat}?colors=#FFEC00`
                }
              >
                <a>
                  <span className="yellow">Yellow</span>
                  <span>Yellow</span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={
                  subcat != undefined
                    ? `/allcategory/${supercat}/${subcat}?color=#800000`
                    : `/allcategory/${supercat}?colors=#800000`
                }
              >
                <a>
                  <span className="maroon">Maroon</span>
                  <span>Maroon</span>
                </a>
              </Link>
            </li>

            <li>
              <Link
                href={
                  subcat != undefined
                    ? `/allcategory/${supercat}/${subcat}?color=#0000FF`
                    : `/allcategory/${supercat}?colors=#0000FF`
                }
              >
                <a>
                  <span className="blue">Blue</span>
                  <span>Blue</span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={
                  subcat != undefined
                    ? `/allcategory/${supercat}/${subcat}?color=#00FF00`
                    : `/allcategory/${supercat}?colors=#00FF00`
                }
              >
                <a>
                  <span className="green">Green</span>
                  <span>Green</span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={
                  subcat != undefined
                    ? `/allcategory/${supercat}/${subcat}?color=#FFC0CB`
                    : `/allcategory/${supercat}?colors=#FFC0CB`
                }
              >
                <a>
                  <span className="pink">Pink</span>
                  <span>Pink</span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={
                  subcat != undefined
                    ? `/allcategory/${supercat}/${subcat}?color=#FFA500`
                    : `/allcategory/${supercat}?colors=#FFA500`
                }
              >
                <a>
                  <span className="orange">Orange</span>
                  <span>Orange</span>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={
                  subcat != undefined
                    ? `/allcategory/${supercat}/${subcat}?color=#A020F0`
                    : `/allcategory/${supercat}?colors=#A020F0`
                }
              >
                <a>
                  <span className="purple">Purple</span>
                  <span>Purple</span>
                </a>
              </Link>
            </li>

            <li>
              <Link
                href={
                  subcat != undefined
                    ? `/allcategory/${supercat}/${subcat}?color=#964B00`
                    : `/allcategory/${supercat}?colors=#964B00`
                }
              >
                <a>
                  <span className="brown">Brown</span>
                  <span>Brown</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="widget widget_dravo_posts_thumb">
          <h3 className="widget-title">
            <span>Our Best Sellers</span>
          </h3>

          {randProduct &&
            randProduct.map((items, index) => {
              const slug = items.slug;
              return (
                <article className="item" key={index}>
                  <Link href={`/product/gold/${slug}`}>
                    <a className="thumb">
                      <img
                        src={
                          items &&
                          items?.goldattributes[0]?.color[0] &&
                          items?.goldattributes[0]?.color[0]?.images[0]?.img
                        }
                        alt="blog-image"
                      />
                    </a>
                  </Link>
                  <div className="info">
                    <h4 className="title">
                      <Link href={`/product/gold/${slug}`}>
                        <a>{items && items.name}</a>
                      </Link>
                    </h4>
                    <div className="star-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <span className="price">
                      ₹{items && items.goldsortprice}
                    </span>
                  </div>
                </article>
              );
            })}
        </div>

        <div className="widget widget_follow_us">
          <h3 className="widget-title">
            <span>Follow Us</span>
          </h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/spicywhips.global/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/SpicyWhips"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/spicywhips.global/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://in.pinterest.com/spicywhips/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </a>
            </li>
          </ul>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">
            <span>Tags</span>
          </h3>
          <div className="tagcloud">
            <Link href="#">
              <a>Advertisment</a>
            </Link>

            <Link href="#">
              <a>Business</a>
            </Link>

            <Link href="#">
              <a>Life</a>
            </Link>

            <Link href="#">
              <a>Lifestyle</a>
            </Link>

            <Link href="#">
              <a>Fashion</a>
            </Link>

            <Link href="#">
              <a>Ads</a>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
