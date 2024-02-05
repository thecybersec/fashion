import React from "react";
import ContactForm from "./ContactForm";

const ContactPageContent = () => {
  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="contact-content">
                <h2>Howdy! Tell Us About Your Thinking</h2>
                <p>
                  Get in touch with our sales team for any queries. We're ready
                  to serve you.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact-image">
                <img src="/images/contact.png" alt="contact-image" />
              </div>
            </div>
          </div>

          <div className="contact-form-area">
            <div className="row m-0">
              <div className="col-lg-8 col-md-12 p-0">
                {/* Contact Form */}
                <ContactForm />
              </div>

              <div className="col-lg-4 col-md-12 p-0">
                <div className="contact-info">
                  <h3>Contact Information</h3>
                  <ul className="info">
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      House no 2284/F4, Ward no 37, Harmu, Tongri Toli,Near
                      Jatra Tand Maidan, RANCHI, JHARKHAND 834002, INDIA
                    </li>
                    <li>
                      <i className="fas fa-mobile-alt"></i>
                      <a href="tel:++918297190010">(+91) 829-719-0010</a>
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      <a href="mailto:info@spicywhips.com">
                        info@spicywhips.com
                      </a>
                    </li>
                  </ul>
                  <h3>Follow Us</h3>
                  <ul className="social-links">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPageContent;
