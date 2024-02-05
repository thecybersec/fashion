import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
import Link from "next/link";
const FeedbackStyleThree = () => {
  const [testimonialData, setTestimonialData] = useState();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const getTestimonial = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "api/testimonial/get",
      });
      setTestimonialData(response.data.testimonial);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTestimonial();
  }, []);
  return (
    <>
      <div className="feedback-area pt-100 bg-f5f5f5 pb-70">
        <div className="container">
          <div className="section-title style-two">
            <h2>Trusted Customer Feedback</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p> */}
          </div>
          <div className="row justify-content-center">
            {testimonialData &&
              testimonialData?.slice(0, 4).map((items, index) => {
                const img = items.testimonialImage;
                return (
                  <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                    <div
                      className="single-feedback-box cursor-pointer"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="d-flex justify-content-center mb-4">
                        <div
                          style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                            borderRadius: "50%",
                            width: "100px",
                            height: "100px",
                            filter: "drop-shadow(0 0 20px #888888)",
                          }}
                        ></div>
                      </div>
                      <div
                        style={{
                          maxHeight: expandedIndex === index ? "none" : "7.6em", // Adjust the height as per your requirement
                          overflow: "hidden",
                          position: "relative",
                          marginBottom: "10px",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            padding: 0,
                          }}
                        >
                          {items && items.description}
                        </p>
                        {items && items.description.split(" ").length > 30 && (
                          <span
                            style={{
                              position: "absolute",
                              bottom: "-4px",
                              right: 0,
                              background: "white",
                              padding: "0 4px",
                              cursor: "pointer",
                              fontSize: "0.7em",
                            }}
                            onClick={() =>
                              setExpandedIndex(
                                expandedIndex === index ? null : index
                              )
                            }
                          >
                            {expandedIndex === index
                              ? "View Less"
                              : "View More"}
                          </span>
                        )}
                      </div>
                      <h3>
                        {items && items.name}{" "}
                        <span>- {items && items.designation}</span>
                      </h3>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <Link href="/testimonial">
            <div className="text-center">
              <Button className="btn btn-warning">View More</Button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeedbackStyleThree;
