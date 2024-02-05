import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-md-12">
              <div className="single-footer-widget pr-5 ">
                <div>
                  <Link href="/">
                    <a className="logo">
                      <img
                        src="/images/logo.png"
                        alt="logo"
                        style={{ width: "60%" }}
                      />
                    </a>
                  </Link>
                </div>
                <p>
                  Our aim is to provide fashionable and affordable clothes to
                  our target market. So far, we have successfully reached out to
                  our target audience and helped them express their unique
                  style. We believe that fashion should be accessible to
                  everyone, and we are committed to making that happen. With our
                  online store, we make it easy for people all over the world to
                  shop for our clothes. Our goal is to continue expanding our
                  reach so that we can continue to bring affordable fashion to
                  more people.
                </p>
                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/spicywhips.global/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/SpicyWhips"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/spicywhips.global/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://in.pinterest.com/spicywhips/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location"
                >
                  Check our shop in Google Map
                </a> */}
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-4">
              <div className="single-footer-widget">
                <h3>Help</h3>
                <ul className="custom-links">
                  {/* <li>
                    <Link href="/order-tracking">
                      <a>Track Your Order</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/terms-conditions">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/shipping">
                      <a>Shipping Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/delivery-returns">
                      <a>Return Policy</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/contact">
                      <a>Store Locator</a>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-4">
              <div className="single-footer-widget">
                <h3>Company</h3>
                <ul className="custom-links">
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/contact">
                      <a>Location Us</a>
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="#">
                      <a>Careers</a>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/wishlist">
                      <a>Wishlists</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-4">
              <div className="single-footer-widget">
                <h3>Contact</h3>

                <div className="phone">
                  <span>Email:</span>
                  <a href="mailto:info@spicywhips.com">
                    info@spicywhips.com
                  </a>{" "}
                  <br />
                  <a href="mailto:support@spicywhips.com">
                    support@spicywhips.com
                  </a>
                </div>

                <div className="phone">
                  <span>Phone:</span>
                  <a href="tel:+918297190010">(+91) 829-719-0010</a> <br />
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7 col-sm-7">
                <p>
                  Copyright &copy; {currentYear} Spicywhips. All Rights Reserved
                  By <a href="#">Spicywhips</a>
                  <h6>
                    Crafted With{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      style={{ color: "red", size: "20px" }}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>
                    </svg>{" "}
                    at
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://thecybertize.com/"
                      className="text-decoration-none"
                      style={{ color: "#000" }}
                    >
                      {" "}
                      TheCybertize
                    </a>
                  </h6>
                </p>
              </div>
              <div className="col-lg-6 col-md-5 col-sm-5">
                <div className="payment-type">
                  <img src="/images/payment.png" alt="payment-type" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
