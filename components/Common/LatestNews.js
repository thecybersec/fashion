import React from "react";
import Link from "next/link";

const LatestNews = () => {
  return (
    <>
      <div className="blog-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>
              <span>SpicyWhips Latest News</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog1.jpg" alt="blog-image" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <Link href="/blog-grid">
                        <a>FASHION</a>
                      </Link>
                    </li>
                    <li>15TH JUNE, 2023</li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>
                        The who what wear summer guide is here Girl thing to
                        know
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog2.jpg" alt="blog-image" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <Link href="/blog-grid">
                        <a>LIFESTYLE</a>
                      </Link>
                    </li>
                    <li>14TH JUNE, 2023</li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>
                        The SpicyWhips 33 of this week's best new arrivals for
                        summer
                      </a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog-details">
                    <a className="d-block">
                      <img src="/images/blog/blog3.jpg" alt="blog-image" />
                    </a>
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <Link href="/blog-grid">
                        <a>DESIGN</a>
                      </Link>
                    </li>
                    <li>13TH JUNE, 2023</li>
                  </ul>
                  <h3>
                    <Link href="/blog-details">
                      <a>How to sell Menswear to Women and Womenswear to Men</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-shape">
          <img src="/images/circle.png" alt="shape" />
        </div>
      </div>
    </>
  );
};

export default LatestNews;
