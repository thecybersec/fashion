import React from "react";
import useAxios from "../Hooks/useAxios";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SubscribeFormStyleThree = () => {
  const [email, setEmail] = useState("");
  const [subscribeText, setSubscribeText] = useState("SUBSCRIBE NOW");

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
      toast.success("Newsletter Subscribed2 !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setSubscribeText("SUBSCRIBE NOW");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="subscribe-area ptb-100">
        <div className="container">
          <div className="subscribe-text">
            <h2>Sign up now & get 10% off</h2>
            <p>
              Receive a 10% discount in your Spicy Whips wallet (100%
              redeemable). Hope you enjoy shopping with us.
            </p>
            <form className="newsletter-form" onSubmit={(e) => newsLetter(e)}>
              <input
                type="email"
                className="input-newsletter"
                placeholder="Enter your email address"
                name="EMAIL"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">
                <i className="far fa-paper-plane"></i> {subscribeText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeFormStyleThree;
