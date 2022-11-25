import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            illum suscipit impedit nisi quasi expedita! Aperiam perspiciatis
            temporibus quod expedita.
          </p>
          <form
            className="contact-form"
            action="https://formspree.io/f/mbjbwvoe"
            method="POST"
          >
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
              name="_replyto"
            />
            <button className="submit-btn" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
