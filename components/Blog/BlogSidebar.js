import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import moment from "moment";
import useAxios from "../Hooks/useAxios";
const BlogSidebar = ({ tags }) => {
  const [blogDetails, setBlogDetails] = useState();
  const tagsArray = tags && tags.split(",");
  const blogData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/blog/get",
      });
      setBlogDetails(response.data.blog);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    blogData();
  }, []);
  return (
    <>
      <aside className="widget-area">
        {/* <div className="widget widget_search">
          <form className="search-form">
            <input
              type="search"
              className="search-field"
              placeholder="Search..."
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div> */}

        <div className="widget widget_author">
          <img src="/images/team/team1.jpg" alt="author" />
          <h3>"Find your style with our diverse t-shirt collection"</h3>

          <img src="/images/signature.png" alt="signature" className="mt-2" />
        </div>

        <div className="widget widget_follow_us">
          <h3 className="widget-title">
            <span>Follow Us</span>
          </h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/spicywhips.global/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/SpicyWhips"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/spicywhips.global/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://in.pinterest.com/spicywhips/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </a>
            </li>
          </ul>
        </div>

        <div className="widget widget_dravo_posts_thumb">
          <h3 className="widget-title">
            <span>Popular Posts</span>
          </h3>

          {blogDetails &&
            blogDetails.slice(0, 5).map((items, index) => {
              const date = items.createdAt;
              const formatedDate = moment(date).format("ll");
              return (
                <article className="item" key={index}>
                  <Link href={items.slug}>
                    <a className="thumb">
                      <img
                        src={items && items.blogThumbnail}
                        alt="blog-image"
                      />
                    </a>
                  </Link>
                  <div className="info">
                    <h4 className="title">
                      <Link href={items.slug}>
                        <a>{items && items.name}</a>
                      </Link>
                    </h4>
                    <span className="date">{formatedDate}</span>
                  </div>
                </article>
              );
            })}
        </div>

        {/* <div className="widget widget_categories">
          <h3 className="widget-title">
            <span>Categories</span>
          </h3>
          <ul>
            <li>
              <Link href="/categories">
                <a>Business</a>
              </Link>
            </li>
            <li>
              <Link href="/categories">
                <a>Privacy</a>
              </Link>
            </li>
            <li>
              <Link href="/categories">
                <a>Technology</a>
              </Link>
            </li>
            <li>
              <Link href="/categories">
                <a>Tips</a>
              </Link>
            </li>
            <li>
              <Link href="/categories">
                <a>Log in</a>
              </Link>
            </li>
            <li>
              <Link href="/categories">
                <a>Uncategorized</a>
              </Link>
            </li>
          </ul>
        </div> */}

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">
            <span>Tags</span>
          </h3>
          <div className="tagcloud">
            {tagsArray?.map((items, index) => {
              return (
                <Link href="/categories" key={index}>
                  <a>{items}</a>
                </Link>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};

export default BlogSidebar;
