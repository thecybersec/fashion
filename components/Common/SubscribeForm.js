import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SubscribeForm = () => {
  const [subscribeText, setSubscribeText] = useState("SUBSCRIBE NOW");
  const [email, setEmail] = useState("");
  const newsLetter = async (e) => {
    e.preventDefault();
    setSubscribeText("please wait...");
    try {
      const response = await axios({
        method: "POST",
        url: "api/newssubscription/create",
        data: {
          email: email,
        },
      });
      setEmail("");
      Notification("success");
      setSubscribeText("SUBSCRIBE NOW");
    } catch (err) {
      console.error(err);
    }
  };

  // Start Notification Code
  const Notification = (type) => {
    switch (type) {
      case "success":
        toast.success("Newsletter Subscribed !", {
          position: "top-right",
          autoClose: 3996,
        });
        break;
    }
  };
  // End  Notification Code
  return (
    <>
      <div className="subscribe-area pb-100">
        <div className="container">
          <div className="subscribe-inner">
            <div className="content">
              <h2>Sign up now & get 10% off</h2>
              <p>
                Receive a 10% discount in your Spicy Whips wallet (100%
                redeemable). Hope you enjoy shopping with us.
              </p>
              <form className="newsletter-form" onSubmit={newsLetter}>
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Enter your email address"
                  name="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">
                  <i className="far fa-paper-plane"></i>
                  {subscribeText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SubscribeForm;
