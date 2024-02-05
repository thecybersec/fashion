import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogSidebar from "../Blog/BlogSidebar";
import setHeader from "../Hooks/axiosInstance";
import Cookies from "universal-cookie";
import axios from "axios";
import moment from "moment";
import ReactHtmlParser from "react-html-parser";
import useAxios from "../Hooks/useAxios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BlogDetailsContent = ({ data }) => {
  // Start Set cookies in header
  axios.defaults.headers.common["Authorization"] = setHeader();
  //End Set Cookies in Header
  const [blogData, setBlogData] = useState();
  const [width, setWidth] = useState();
  const [blogId, setBlogId] = useState();
  const [value, setValue] = useState("");
  const blogDesc = blogData && blogData?.detail;
  const cookies = new Cookies();
  const uid = cookies.get("pid");
  const getDataById = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/blog/blogdetailslug",
        data: {
          blog_slug: data,
        },
      });
      setBlogData(response.data.blog);
      setBlogId(response.data.blog._id);
    } catch (err) {
      console.error(err);
    }
  };

  // Start Notification Code
  const Notification = (type) => {
    switch (type) {
      case "error":
        toast.error("Login to add Comment !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
    }
  };
  // End  Notification Code

  // Start post comment API
  const postComment = async (e) => {
    e.preventDefault();
    try {
      const respond = await axios({
        method: "POST",
        url: "api/blog/addcomment",
        data: {
          blogId: blogId,
          user_id: uid,
          mycomment: value,
        },
      });
      getDataById();
      setValue("");
    } catch (err) {
      console.error(err);
      Notification("error");
    }
  };
  // End post comment API

  const commentLength = blogData && blogData.comments.length;
  const date = blogData && blogData.createdAt;
  const formatedDate = moment(date).format("LL");
  const tags = blogData && blogData.tags;
  const tagsArray = tags && tags.split(",");

  useEffect(() => {
    getDataById();
  }, [data]);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="post-thumb">
                  <img
                    src={blogData && blogData.blogThumbnail}
                    alt="blog-details"
                  />
                </div>
                <h3>{blogData && blogData.name}</h3>
                <div className="post-meta">
                  <ul>
                    <li>
                      <i className="far fa-calendar-alt"></i> {formatedDate}
                    </li>
                    <li>
                      <i className="far fa-comment-alt"></i>{" "}
                      <a href="#comments">{commentLength} Comments</a>
                    </li>
                  </ul>
                </div>
                <p>{ReactHtmlParser(blogDesc)}</p>
                <div className="post-footer">
                  <div className="post-tags">
                    <span className="sub">Tags:</span>
                    <ul>
                      {tagsArray &&
                        tagsArray.map((items, index) => {
                          return (
                            <li key={index}>
                              <Link href="/categories">
                                <a rel="tag">{items}</a>
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/spicywhips.global/"
                          className="facebook"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://twitter.com/SpicyWhips"
                          className="twitter"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/spicywhips.global/"
                          className="instagram"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Comments */}
              <div id="comments" className="comments-area">
                <h3 className="comments-title">{commentLength} Comments:</h3>
                <ol className="comment-list">
                  {blogData &&
                    blogData.comments &&
                    blogData.comments.map((items, index) => {
                      const commentDate = items.commentAt;

                      var formatedCommentDate =
                        moment(commentDate).format("LL");
                      return (
                        <li className="comment" key={index}>
                          <div className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src="/images/user/user1.jpg"
                                  className="avatar"
                                  alt="user"
                                />
                                <b className="fn">John Jones</b>
                              </div>
                              <div className="comment-metadata">
                                <span>{formatedCommentDate}</span>
                              </div>
                            </footer>
                            <div className="comment-content">
                              <p>{items.comment}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ol>

                {/* Comments form */}
                <div className="comment-respond">
                  <h3 className="comment-reply-title">Leave A Reply</h3>
                  <form className="comment-form" onSubmit={postComment}>
                    {/* <p className="comment-notes">
                      <span id="email-notes">
                        Your email address will not be published.
                      </span>
                      Required fields are marked{" "}
                      <span className="required">*</span>
                    </p> */}

                    <p className="comment-form-comment">
                      <label>Comment</label>
                      <textarea
                        name="comment"
                        id="comment"
                        cols="45"
                        placeholder="Your Comment..."
                        rows="5"
                        required="required"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      ></textarea>
                    </p>
                    {/* <p className="comment-form-cookies-consent">
                      <input
                        type="checkbox"
                        value="yes"
                        name="comment-cookies-consent"
                        id="comment-cookies-consent"
                      />
                      <label htmlFor="comment-cookies-consent">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </p> */}
                    <p className="form-submit">
                      <input
                        type="submit"
                        name="submit"
                        id="submit"
                        className="submit"
                        value="Post A Comment"
                      />
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default BlogDetailsContent;
