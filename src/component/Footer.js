import React from "react";
import "../Sass/Footer.scss";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <hr />
      <div class="container">
        <div class="footer">
          <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <div className="footer_account">
                <h6>Account</h6>
                <ul className="footer_account_one">
                  <li>
                    <a href="">Sign In</a>
                  </li>
                  <li>
                    <a href="">Register</a>
                  </li>
                  <li>
                    <a href="">Order Status</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <div className="footer_account">
                <h6>About Us</h6>
                <ul className="footer_aboutus">
                  <li>
                    <a href="">Our Story</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <div className="footer_account">
                <h6>Help</h6>
                <ul className="footer_help_one">
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">Order Status</a>{" "}
                  </li>
                  <li>
                    <a href="">Returns</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <div className="footer_account">
                <h6>Follow Us!</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <FiInstagram size={20} /> &nbsp;&nbsp;&nbsp;&nbsp;
                <FiFacebook size={20} /> &nbsp;&nbsp;&nbsp;&nbsp;
                <FiTwitter size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="footer-copy">
          <div class="aem-Grid aem-Grid--12 foot-venia">
            <div class="aem-GridColumn aem-GridColumn--default--4">
              <div className="logo">
                <h2><span>V</span>ENIA</h2>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <div className="footerp">
                <p>© Company Name Address Ave, City Name, State ZIP</p>
              </div>
            </div>
            <div class="aem-GridColumn aem-GridColumn--default--2">
              <div className="terms">
                <div>
                  <a href="" class="">
                    <p>Terms of Use</p>
                  </a>
                </div>
                <div>
                  <a href="" class="">
                    <p>Privacy Policy</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
