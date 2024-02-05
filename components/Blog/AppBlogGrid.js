import React from "react";
import Link from "next/link";
import moment from "moment";
const AppBlogGrid = ({ data }) => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {/* Start Blog card design Code */}
            {data.blog.map((item, index) => {
              const time = item.createdAt;
              const formatedTime = moment(time).format("ll");

              return (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="single-blog-post">
                    <div className="image">
                      <Link href={`/appblog/${item.slug}`}>
                        <a className="d-block">
                          <img src={item.blogThumbnail} alt="blog-image" />
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
                        <li>{formatedTime}</li>
                      </ul>
                      <h3>
                        <Link href={`/appblog/${item.slug}`}>
                          <a>{item.name}</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* End Blog card design Code */}

            {/* <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <div className="nav-links">
                  <Link href="/blog-grid">
                    <a className="previous page-numbers" title="Next Page">
                      <i className="fas fa-arrow-left"></i>
                    </a>
                  </Link>
                  <span className="page-numbers current">1</span>
                  <Link href="/blog-grid">
                    <a className="page-numbers">2</a>
                  </Link>
                  <Link href="/blog-grid">
                    <a className="page-numbers">3</a>
                  </Link>
                  <Link href="/blog-grid">
                    <a className="next page-numbers" title="Next Page">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="circle-shape">
          <img src="/images/circle.png" alt="shape" />
        </div>
      </div>
    </>
  );
};

export default AppBlogGrid;
