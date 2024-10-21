import React from "react";
import Style from "./Footer.module.scss";
import footer from "../img/ftr-logo.png";

const Footer = () => {
  return (
    <div className={Style.Footer}>
      <div className={Style.wrapper}>
        <div className={Style.FooterDisk}>
          <div className={Style.FooterImg}>
            <img src={footer} alt="" />
            <h2>Powered by Satyug ©</h2>
            <h3>Satyug Life Foundation Satyug Labs Pvt Ltd</h3>
          </div>
          <div className={Style.Footermain}>
            <ul>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">About Satyug</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms of Services</a>
              </li>
            </ul>
          </div>
          <div className={Style.FooterIcon}>
            <h2>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </h2>
            <select>
              <option>English</option>
              <option>Hindi</option>
              <option>Bengali</option>
              <option>Tamil</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
