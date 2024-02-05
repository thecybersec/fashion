import React from "react";

const FacilityStyleThree = () => {
  return (
    <>
      <div className="facility-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-facility-box">
                <div className="icon bg-f5f5f5">
                  <i className="fas fa-truck"></i>
                </div>
                <h5>Quality Checking</h5>
                <span>3 step Process</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-facility-box">
                <div className="icon bg-f5f5f5">
                  <i className="far fa-credit-card"></i>
                </div>
                <h5>Secure Payment</h5>
                <span>100% secure payment</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-facility-box">
                <div className="icon bg-f5f5f5">
                  <i className="fas fa-gift"></i>
                </div>
                <h5>Consignment Tracking</h5>
                <span>Easy to track</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-facility-box">
                <div className="icon bg-f5f5f5">
                  <i className="fas fa-headphones-alt"></i>
                </div>
                <h5>24/7 Support</h5>
                <span>Ready support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacilityStyleThree;
