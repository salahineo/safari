import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "../Button/Button";
import "./Footer.css";

const Footer = () => {
  // Get Current Footer Year
  const [year, setYear] = useState("");
  useEffect(() => {
    const currentData = new Date();
    setYear(currentData.getFullYear());
  }, []);

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can subscribe any time
        </p>
        <div className="input-areas">
          <form onSubmit={(e) => e.preventDefault()}>
            <input className="footer-input" type="email" name="footer-email" placeholder="Your Email" />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <section className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="copyrights">
            &copy; <span className="current-year">{year}</span> | <span className="author">Mohamed Salah</span>
          </div>
          <div className="social-icons">
            <a href="https://github.com/salahineo" target="_blank" rel="noreferrer">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/salahineo/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://twitter.com/salahineo" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.facebook.com/salahineo/" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://salahineo.github.io/salahineo/" target="_blank" rel="noreferrer">
              <i className="fas fa-globe-africa" />
            </a>
            <a href="mailto:salahineo.work@gmail.com" target="_blank" rel="noreferrer">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Footer;
