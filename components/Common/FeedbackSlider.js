import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import useAxios from "../Hooks/useAxios";
import axios from "axios";
import { useEffect, useState } from "react";

const options = {
  items: 1,
  nav: true,
  loop: true,
  margin: 25,
  dots: false,
  autoplay: false,
  autoplayHoverPause: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
};

const FeedbackSlider = () => {
  const [display, setDisplay] = React.useState(false);
  const [data, setData] = useState([]);

  const getFeedback = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "api/testimonial/get",
      });
      setData(response.data.testimonial);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeedback();
  }, [display]);

  useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <div className="feedback-area bg-image ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>
              <span>Trusted Customer Feedback</span>
            </h2>
          </div>
          {display ? (
            <OwlCarousel
              className="feedback-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="single-feedback-item ">
                <p>
                  Spicywhips exceeded my expectations! Their t-shirts are superb
                  and their customer service is exceptional. A brand that truly
                  cares about their customers. Highly recommended!
                </p>
                <h3>
                  Shweta
                  <span>-Beautician</span>
                </h3>
                <div className="d-flex justify-content-center mt-4">
                  <div
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/cybertize-nik-cloud/image/upload/v1684215372/ecomnode/testimonial/nffhq5sjxfxmmkdovytr.jpg)`,
                      backgroundSize: "cover",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                    }}
                  ></div>
                </div>
              </div>
              {data &&
                data?.map((items, index) => {
                  const { description, designation, name, testimonialImage } =
                    items;
                  return (
                    <div className="single-feedback-item " key={index}>
                      <p>{description}</p>
                      <h3>
                        {name}
                        <span>- {designation}</span>
                      </h3>
                      <div className="d-flex justify-content-center mt-4">
                        <div
                          style={{
                            backgroundImage: `url(${testimonialImage})`,
                            backgroundSize: "cover",
                            borderRadius: "50%",
                            width: "50px",
                            height: "50px",
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
