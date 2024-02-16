import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        A town hall different from bala blu, blue blu bulaba. broom broom broom
        . Bala blu blue blu bulaba. The farmers will make more money.
      </Header>
      <div className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="sherifd33n@gmail.com">
              <MdEmail />
            </a>
            <a href="http://m.me/">
              <BsMessenger />
            </a>
            <a href="https://wa.me/">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
