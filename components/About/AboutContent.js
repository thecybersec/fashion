import React from "react";
import Link from "next/link";
const AboutContent = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="about-content">
                <h2 style={{ fontSize: "63px" }}>
                  About <br />
                  SpicyWhips Store
                </h2>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="about-text">
                <h1>Welcome to Spicywhips</h1>
                <p>
                  The ultimate destination for fashion enthusiasts who seek
                  high-quality T-shirts made from premium cotton fabric.
                </p>
                <p>
                  Established in 2020, Spicywhips is a fashion brand that prides
                  itself on creating stylish and comfortable T-shirts for both
                  men and women.
                </p>
                <p>
                  At Spicywhips, we believe that fashion should be both
                  functional and comfortable. That's why we use only the finest
                  cotton fabric to create T-shirts that feel as great as they
                  look. Our T-shirts are perfect for everyday wear, whether
                  you're running errands, heading to the gym, or just hanging
                  out with friends.
                </p>
                <p>
                  We are committed to providing our customers with the highest
                  quality T-shirts possible. Our team of skilled designers and
                  craftsmen work tirelessly to create T-shirts that are not only
                  stylish, but also durable and long-lasting. From the stitching
                  to the finishing, every aspect of our T-shirts is carefully
                  crafted to ensure that they meet our exacting standards of
                  quality.
                </p>
                <p>
                  At Spicywhips, we understand that fashion is a reflection of
                  your personality. That's why we offer a wide range of T-shirt
                  designs that cater to different tastes and preferences.
                  Whether you prefer classic designs or trendy patterns, we have
                  something for everyone. Our T-shirts come in a variety of
                  colors and sizes, so you're sure to find the perfect fit for
                  you.
                </p>
                <p>
                  We are passionate about fashion and committed to providing our
                  customers with the best possible shopping experience. From the
                  moment you visit our website, you'll be impressed with our
                  user-friendly interface and easy-to-use shopping cart. Our
                  customer support team is always available to answer any
                  questions you may have and to help you make the perfect
                  purchase.
                </p>
                <p>
                  At Spicywhips, we believe in giving back to the community.
                  That's why we donate a portion of our profits to local
                  charities that support causes we care about. By purchasing our
                  T-shirts, you're not only investing in high-quality fashion,
                  but you're also contributing to a better world.
                </p>
                <p>
                  In conclusion, Spicywhips is a fashion brand that is committed
                  to providing high-quality T-shirts made from premium cotton
                  fabric. We offer a wide range of designs and sizes to cater to
                  different tastes and preferences. Our team of skilled
                  designers and craftsmen work tirelessly to create T-shirts
                  that are not only stylish, but also durable and long-lasting.
                  We are passionate about fashion and committed to providing our
                  customers with the best possible shopping experience. Shop
                  with us today and experience the Spicywhips difference.
                </p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="about-image">
                <img src="/images/about.jpg" alt="about-image" />
              </div>
            </div>
          </div>

          <div className="funfacts-area">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-6 col-sm-3">
                <div className="single-funfacts-box">
                  <div className="icon">
                    <i className="fas fa-shopping-bag"></i>
                  </div>
                  <h3>Products for sale</h3>
                  <span className="number">25.6K</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 col-sm-3">
                <div className="single-funfacts-box">
                  <div className="icon">
                    <i className="fas fa-store-alt"></i>
                  </div>
                  <h3>Sellers active on store</h3>
                  <span className="number">1.2M</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 col-sm-3">
                <div className="single-funfacts-box">
                  <div className="icon">
                    <i className="fas fa-shopping-basket"></i>
                  </div>
                  <h3>Buyers active on store</h3>
                  <span className="number">25.2M</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6 col-sm-3">
                <div className="single-funfacts-box">
                  <div className="icon">
                    <i className="far fa-credit-card"></i>
                  </div>
                  <h3>Monthly gross sales</h3>
                  <span className="number">₹10.8M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
