import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>

          <p>
            A town hall different from bala blu, blue blu bulaba. broom broom
            broom brooooooooom. Bala blu blue blu bulaba. A town hall different
            from bala blu,broom broom broom brooooooooom.
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="norefferer noopener"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="norefferer noopener"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="norefferer noopener"
            >
              <AiOutlineTwitter />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="norefferer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>

        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>

        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/ss">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>

        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>

      <div className="footer__copyright">
        <small>2024 Sherifd33n &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
