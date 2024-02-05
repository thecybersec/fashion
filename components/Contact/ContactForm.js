import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import { Form } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
const alertContent = () => {
  MySwal.fire({
    title: "Thank you for contacting",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (e) => {
    const { checked } = e.target;
    setIsChecked(checked);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const trimmedValue = value.replace(/^\s+/, ""); // Remove leading whitespace

    setContact((prevState) => ({ ...prevState, [name]: trimmedValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { name, email, phone, subject, message } = contact;
      const payload = { name, email, subject, phone, message };
      const response = await axios({
        method: "POST",
        url: "api/contact/create",
        data: payload,
      });
      setContact(INITIAL_STATE);
      alertContent();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={contact.name}
                  onChange={handleChange}
                  required
                  placeholder="John Edgar"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={contact.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  maxLength="10"
                  name="phone"
                  pattern="[0-9]*"
                  className="form-control"
                  value={contact.phone}
                  onChange={handleChange}
                  placeholder="e.g. 8297190010"
                  required
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  value={contact.subject}
                  onChange={handleChange}
                  required
                  placeholder="e.g. some enquery related to dispatch and packing"
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="form-group">
                <label>Message...</label>
                <textarea
                  name="message"
                  cols="30"
                  rows="6"
                  className="form-control"
                  value={contact.message}
                  onChange={handleChange}
                  required
                  placeholder="Type here..."
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="checkme"
                  checked={isChecked}
                  onChange={handleCheck}
                />
                <label className="form-check-label" htmlFor="checkme">
                  Accept{" "}
                  <Link href="/terms-conditions">
                    <a>Terms of Services</a>
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </label>
              </div>
            </div>

            <div className="col-lg-12 col-sm-12">
              {isChecked ? (
                <button
                  type="submit"
                  className="default-btn"
                  disabled={isLoading} // Disable the button when loading
                >
                  {isLoading ? (
                    <i className="fas fa-spinner fa-spin"></i> // Show a loader when loading
                  ) : (
                    <i className="far fa-paper-plane"></i> // Show the send icon when not loading
                  )}{" "}
                  Send Message
                </button>
              ) : (
                <button
                  className="btn btn-dark disabled "
                  style={{ padding: "10px 20px" }}
                >
                  <i className="far fa-paper-plane"></i> Send Message
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
