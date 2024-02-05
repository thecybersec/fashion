import React from "react";
import Link from "next/link";

const Collection = () => {
  return (
    <>
      <div className="collection-area pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="collection-box">
                <img
                  src="/images/collection/collection9.jpg"
                  alt="oversized t shirt mens effortlessly cool and comfortable"
                />
                <div className="content">
                  <span>Men's Top Collection </span>
                  <h3>Oversized-Tees</h3>
                  <Link href="/allcategory/men/Oversize-T-Shirt-Men/">
                    <a className="link-btn">
                      <i className="fas fa-store"></i> SHOP NOW
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="collections-list">
                <div className="collection-box">
                  <img
                    src="/images/collection/collection10.jpg"
                    alt="Slay in style with this stylish crop top"
                  />
                  <div className="content style-two">
                    <span>Women</span>
                    <h3>CROP TOPS</h3>
                    <h5>AND</h5>
                    <h3>REGULAR</h3>
                    <Link href="/allcategory/women/crop-top/">
                      <a className="link-btn">
                        <i className="fas fa-store"></i> SHOP NOW
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="collection-box">
                  <img
                    src="/images/collection/collection11.jpg"
                    alt="Perfect oversized tee for any occasion"
                  />
                  <div className="content style-three">
                    <span>Women</span>
                    <h3>Oversized-Tees</h3>
                    <Link href="/allcategory/women/Oversize-T-Shirt">
                      <a className="link-btn">
                        <i className="fas fa-store"></i> SHOP NOW
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
