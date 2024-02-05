import React from "react";

const Partners = () => {
  return (
    <>
      <div className="partner-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 mb-4">
              <div className="partner-title text-center">
                <h3>Our Trusted Branding Partners</h3>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="partners-list justify-content-center align-items-center">
                <div className="partner-item">
                  <img src="/images/partner/partner1.png" alt="partner" />
                </div>
                <div className="partner-item">
                  <img src="/images/partner/partner2.png" alt="partner" />
                </div>
                <div className="partner-item">
                  <img src="/images/partner/partner3.png" alt="partner" />
                </div>
                <div className="partner-item">
                  <img src="/images/partner/partner4.png" alt="partner" />
                </div>
                <div className="partner-item">
                  <img src="/images/partner/partner5.png" alt="partner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
