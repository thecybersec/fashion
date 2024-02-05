import React from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";
resetIdCounter();

const NewArrivalProductsTabs = () => {
  return (
    <>
      <div className="products-area pb-70">
        <div className="container">
          <div className="section-title style-two">
            <h2>New Arrival Products</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          <Tabs className="products-tabs">
            <TabList>
              <Tab>ALL</Tab>
              <Tab>MANS</Tab>
              <Tab>WOMANS</Tab>
              <Tab>CLOTH</Tab>
              <Tab>BAG</Tab>
              <Tab>SHOE</Tab>
            </TabList>

            <TabPanel>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products10.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="old-price">$521.00</span>
                        <span className="new-price">$399.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="sale">SALE</span>
                    </div>

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
                        <span className="new-price">$199.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="new-price">$150.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products7.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="out-of-stock">Out of Stock</span>
                    </div>

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
                        <span className="old-price">$241.00</span>
                        <span className="new-price">₹200.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products8.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="hot">HOT</span>
                    </div>

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
                        <span className="new-price">$289.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products9.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="new-price">$158.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="sale">SALE</span>
                    </div>

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
                        <span className="new-price">$199.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="new-price">$150.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products7.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="out-of-stock">Out of Stock</span>
                    </div>

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
                        <span className="old-price">$241.00</span>
                        <span className="new-price">₹200.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products8.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="hot">HOT</span>
                    </div>

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
                        <span className="new-price">$289.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products9.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="new-price">$158.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products10.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="old-price">$521.00</span>
                        <span className="new-price">$399.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="new-price">$199.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products7.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="sale">SALE</span>
                    </div>

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
                        <span className="new-price">$150.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products8.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="old-price">$241.00</span>
                        <span className="new-price">₹200.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products9.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="hot">HOT</span>
                    </div>

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
                        <span className="new-price">$289.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products10.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                      <span className="hot">HOT</span>
                    </div>

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
                        <span className="new-price">$158.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="old-price">$521.00</span>
                        <span className="new-price">$399.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="sale">SALE</span>
                    </div>

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
                        <span className="new-price">$199.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="new-price">$150.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products7.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="out-of-stock">Out of Stock</span>
                    </div>

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
                        <span className="old-price">$241.00</span>
                        <span className="new-price">₹200.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products8.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="hot">HOT</span>
                    </div>

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
                        <span className="new-price">$289.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products9.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="new-price">$158.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products10.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="old-price">$521.00</span>
                        <span className="new-price">$399.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="new-price">$199.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products7.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="sale">SALE</span>
                    </div>

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
                        <span className="new-price">$150.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products8.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="old-price">$241.00</span>
                        <span className="new-price">₹200.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products9.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="hot">HOT</span>
                    </div>

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
                        <span className="new-price">$289.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products10.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                      <span className="hot">HOT</span>
                    </div>

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
                        <span className="new-price">$158.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="old-price">$521.00</span>
                        <span className="new-price">$399.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="sale">SALE</span>
                    </div>

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
                        <span className="new-price">$199.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="new-price">$150.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products7.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="out-of-stock">Out of Stock</span>
                    </div>

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
                        <span className="old-price">$241.00</span>
                        <span className="new-price">₹200.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products8.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>

                      <span className="hot">HOT</span>
                    </div>

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
                        <span className="new-price">$289.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products9.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="new-price">$158.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-products-item">
                    <div className="image">
                      <Link href="/product">
                        <a className="d-block">
                          <img
                            src="/images/products/products10.jpg"
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
                            <span className="tooltip-label">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

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
                        <span className="old-price">$521.00</span>
                        <span className="new-price">$399.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default NewArrivalProductsTabs;
