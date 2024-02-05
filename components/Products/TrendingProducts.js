import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  nav: false,
  margin: 25,
  loop: true,
  dots: true,
  autoplay: false,
  autoplayHoverPause: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
};

const TrendingProducts = () => {
  const [display, setDisplay] = React.useState(false);
  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <>
      <div className="products-area ptb-100 bg-f5f5f5">
        <div className="container">
          <div className="section-title style-two">
            <h2>Trending Products</h2>
            <p>
              Here’s a list of items that are piquing interest all over the
              world. Shop the trends and hot brands at spicy whips
            </p>
          </div>

          {display ? (
            <OwlCarousel
              className="products-slides-three owl-carousel owl-theme"
              {...options}
            >
              <div className="single-products-box">
                <Link href="/product">
                  <a className="d-block">
                    <img
                      src="/images/products/products11.jpg"
                      alt="products-image"
                    />
                  </a>
                </Link>
                <ul className="products-button">
                  <li>
                    <a href="#">
                      <i className="fas fa-search-plus"></i>
                      <span className="tooltip-label">Quick View</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-exchange-alt"></i>
                      <span className="tooltip-label">Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-heart"></i>
                      <span className="tooltip-label">Add to Wishlist</span>
                    </a>
                  </li>
                </ul>
                <span className="sale">SALE</span>
                <div className="content">
                  <h3>
                    <Link href="/product">
                      <a>Cheeky woman leather jacket</a>
                    </Link>
                  </h3>
                  <Link href="/cart">
                    <a className="add-to-cart-btn">
                      Add to cart <i className="fas fa-cart-plus"></i>
                    </a>
                  </Link>
                  <div className="price">
                    <span className="new-price">$199.00</span>
                  </div>
                </div>
              </div>

              <div className="single-products-box">
                <Link href="/product">
                  <a className="d-block">
                    <img
                      src="/images/products/products12.jpg"
                      alt="products-image"
                    />
                  </a>
                </Link>
                <ul className="products-button">
                  <li>
                    <a href="#">
                      <i className="fas fa-search-plus"></i>
                      <span className="tooltip-label">Quick View</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-exchange-alt"></i>
                      <span className="tooltip-label">Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-heart"></i>
                      <span className="tooltip-label">Add to Wishlist</span>
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <h3>
                    <Link href="/product">
                      <a>Comfort man black hoodie</a>
                    </Link>
                  </h3>
                  <Link href="/cart">
                    <a className="add-to-cart-btn">
                      Add to cart <i className="fas fa-cart-plus"></i>
                    </a>
                  </Link>
                  <div className="price">
                    <span className="new-price">$150.00</span>
                  </div>
                </div>
              </div>

              <div className="single-products-box">
                <Link href="/product">
                  <a className="d-block">
                    <img
                      src="/images/products/products13.jpg"
                      alt="products-image"
                    />
                  </a>
                </Link>
                <span className="out-of-stock">Out of Stock</span>
                <ul className="products-button">
                  <li>
                    <a href="#">
                      <i className="fas fa-search-plus"></i>
                      <span className="tooltip-label">Quick View</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-exchange-alt"></i>
                      <span className="tooltip-label">Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-heart"></i>
                      <span className="tooltip-label">Add to Wishlist</span>
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <h3>
                    <Link href="/product">
                      <a>Trendy woman black blazer</a>
                    </Link>
                  </h3>
                  <Link href="/cart">
                    <a className="add-to-cart-btn">
                      Add to cart <i className="fas fa-cart-plus"></i>
                    </a>
                  </Link>
                  <div className="price">
                    <span className="old-price">$241.00</span>
                    <span className="new-price">₹200.00</span>
                  </div>
                </div>
              </div>

              <div className="single-products-box">
                <Link href="/product">
                  <a className="d-block">
                    <img
                      src="/images/products/products1.jpg"
                      alt="products-image"
                    />
                  </a>
                </Link>
                <ul className="products-button">
                  <li>
                    <a href="#">
                      <i className="fas fa-search-plus"></i>
                      <span className="tooltip-label">Quick View</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-exchange-alt"></i>
                      <span className="tooltip-label">Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-heart"></i>
                      <span className="tooltip-label">Add to Wishlist</span>
                    </a>
                  </li>
                </ul>
                <span className="sale">SALE</span>
                <div className="content">
                  <h3>
                    <Link href="/product">
                      <a>Cheeky woman leather jacket</a>
                    </Link>
                  </h3>
                  <Link href="/cart">
                    <a className="add-to-cart-btn">
                      Add to cart <i className="fas fa-cart-plus"></i>
                    </a>
                  </Link>
                  <div className="price">
                    <span className="new-price">$199.00</span>
                  </div>
                </div>
              </div>

              <div className="single-products-box">
                <Link href="/product">
                  <a className="d-block">
                    <img
                      src="/images/products/products2.jpg"
                      alt="products-image"
                    />
                  </a>
                </Link>
                <ul className="products-button">
                  <li>
                    <a href="#">
                      <i className="fas fa-search-plus"></i>
                      <span className="tooltip-label">Quick View</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-exchange-alt"></i>
                      <span className="tooltip-label">Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-heart"></i>
                      <span className="tooltip-label">Add to Wishlist</span>
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <h3>
                    <Link href="/product">
                      <a>Comfort man black hoodie</a>
                    </Link>
                  </h3>
                  <Link href="/cart">
                    <a className="add-to-cart-btn">
                      Add to cart <i className="fas fa-cart-plus"></i>
                    </a>
                  </Link>
                  <div className="price">
                    <span className="new-price">$150.00</span>
                  </div>
                </div>
              </div>

              <div className="single-products-box">
                <Link href="/product">
                  <a className="d-block">
                    <img
                      src="/images/products/products3.jpg"
                      alt="products-image"
                    />
                  </a>
                </Link>
                <span className="out-of-stock">Out of Stock</span>
                <ul className="products-button">
                  <li>
                    <a href="#">
                      <i className="fas fa-search-plus"></i>
                      <span className="tooltip-label">Quick View</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-exchange-alt"></i>
                      <span className="tooltip-label">Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-heart"></i>
                      <span className="tooltip-label">Add to Wishlist</span>
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <h3>
                    <Link href="/product">
                      <a>Trendy woman black blazer</a>
                    </Link>
                  </h3>
                  <Link href="/cart">
                    <a className="add-to-cart-btn">
                      Add to cart <i className="fas fa-cart-plus"></i>
                    </a>
                  </Link>
                  <div className="price">
                    <span className="old-price">$241.00</span>
                    <span className="new-price">₹200.00</span>
                  </div>
                </div>
              </div>

              <div className="single-products-box">
                <Link href="/product">
                  <a className="d-block">
                    <img
                      src="/images/products/products4.jpg"
                      alt="products-image"
                    />
                  </a>
                </Link>
                <span className="hot">HOT</span>
                <ul className="products-button">
                  <li>
                    <a href="#">
                      <i className="fas fa-search-plus"></i>
                      <span className="tooltip-label">Quick View</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-exchange-alt"></i>
                      <span className="tooltip-label">Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-heart"></i>
                      <span className="tooltip-label">Add to Wishlist</span>
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <h3>
                    <Link href="/product">
                      <a>Arctix womens essential</a>
                    </Link>
                  </h3>
                  <Link href="/cart">
                    <a className="add-to-cart-btn">
                      Add to cart <i className="fas fa-cart-plus"></i>
                    </a>
                  </Link>
                  <div className="price">
                    <span className="new-price">$289.00</span>
                  </div>
                </div>
              </div>

              <div className="single-products-box">
                <Link href="/product">
                  <a className="d-block">
                    <img
                      src="/images/products/products5.jpg"
                      alt="products-image"
                    />
                  </a>
                </Link>
                <ul className="products-button">
                  <li>
                    <a href="#">
                      <i className="fas fa-search-plus"></i>
                      <span className="tooltip-label">Quick View</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-exchange-alt"></i>
                      <span className="tooltip-label">Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-heart"></i>
                      <span className="tooltip-label">Add to Wishlist</span>
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <h3>
                    <Link href="/product">
                      <a>Mesh lined snowboard</a>
                    </Link>
                  </h3>
                  <Link href="/cart">
                    <a className="add-to-cart-btn">
                      Add to cart <i className="fas fa-cart-plus"></i>
                    </a>
                  </Link>
                  <div className="price">
                    <span className="new-price">$158.00</span>
                  </div>
                </div>
              </div>

              <div className="single-products-box">
                <Link href="/product">
                  <a className="d-block">
                    <img
                      src="/images/products/products6.jpg"
                      alt="products-image"
                    />
                  </a>
                </Link>
                <ul className="products-button">
                  <li>
                    <a href="#">
                      <i className="fas fa-search-plus"></i>
                      <span className="tooltip-label">Quick View</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-exchange-alt"></i>
                      <span className="tooltip-label">Compare</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-heart"></i>
                      <span className="tooltip-label">Add to Wishlist</span>
                    </a>
                  </li>
                </ul>
                <div className="content">
                  <h3>
                    <Link href="/product">
                      <a>Pullover ecosmart hooded</a>
                    </Link>
                  </h3>
                  <Link href="/cart">
                    <a className="add-to-cart-btn">
                      Add to cart <i className="fas fa-cart-plus"></i>
                    </a>
                  </Link>
                  <div className="price">
                    <span className="old-price">$521.00</span>
                    <span className="new-price">$399.00</span>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}

          <div className="view-all-btn">
            <Link href="/shop-left-sidebar-1">
              <a className="default-btn">
                <i className="fas fa-store"></i> VIEW ALL
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
