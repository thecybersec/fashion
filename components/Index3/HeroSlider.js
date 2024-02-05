import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  items: 1,
  nav: true,
  margin: 25,
  loop: true,
  dots: true,
  autoplay: false,
  autoplayHoverPause: true,
  navText: [
    "<i class='fas fa-long-arrow-alt-left'></i>",
    "<i class='fas fa-long-arrow-alt-right'></i>",
  ],
};

const HeroSlider = () => {
  const [display, setDisplay] = React.useState(false);
  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <div className="home-area">
        <div className="container-fluid">
          {display ? (
            <OwlCarousel
              className="home-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="banner-item">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <span className="sub-title">New Inspiration 2023!</span>
                      <h1 className="sliderHeader">CLOTHING MADE FOR YOU!</h1>
                      <p>
                        Freshen up your style with our latest men's collection.
                      </p>
                      <Link href="/allcategory/men/Full-Sleeves-T-Shirts/">
                        <a className="default-btn">
                          <i className="fas fa-store"></i> SHOP NOW
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img
                        src="/images/banner/banner3.png"
                        alt="Full Sleeve T shirts"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner-item">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <span className="sub-title">New Arrival 2023!</span>
                      <h1 className="sliderHeader">
                        EMBRACE THE OVERSIZED LOOK!
                      </h1>
                      <p>
                        Elevate your casual look with our men's oversized
                        t-shirts.
                      </p>
                      <Link href="/allcategory/men/Oversize-T-Shirt-Men/">
                        <a className="default-btn">
                          <i className="fas fa-store"></i> SHOP NOW
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img
                        src="/images/banner/banner4.png"
                        alt="relaxed fit t shirt mens"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
