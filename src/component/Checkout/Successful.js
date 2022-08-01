import React from "react";
import { NavLink } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Successful = () => {
  return (
    <>
      <div className="info container">
        <h1>Order Successful!</h1>
        <hr className="hr" />
        <div className="aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
            <div className="aem-Grid aem-Grid--12">
              <h6>Order Number #1700834</h6>
              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <p>
                  <strong>Shipping Information</strong>
                </p>
                <p className="success">q_farhan@gmail.com +1 (555) 229-3367</p>
                <p className="success">
                  Qadim Farhan 1098 Wapello Street Altadena, California 91001
                  United States
                </p>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <p>
                  <b>Shipping Method</b>
                </p>
                <p className="success">
                  Standard Shipping Est. delivery in 4 - 8 business days FREE
                </p>
                <p>
                  <strong>Shipping Method</strong>
                </p>
                <p className="success">Credit Card Visa ending in 4567</p>
              </div>
            </div>

            <div className="aem-Grid aem-Grid--12">
              <p>
                <strong>3 items in your order</strong>
              </p>
              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className="items">
                  <div>
                    <img
                      src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>Electric Leggings</p>
                    <p>Size: Medium</p>
                    <p>Color: Storm</p>
                    <p>Quantity: 2</p>
                  </div>
                </div>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className="items">
                  <div>
                    <img
                      src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>Signature Sports Bra</p>
                    <p>Size: Medium</p>
                    <p>Color: Storm</p>
                    <p>Quantity: 2</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              You will also receive an email with the details and we will let
              you know when your order has shipped.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. For assistance call Support at
              1-800-867-5309, M - F, 9am - 8pm EST.
            </p>
          </div>

          <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 sucess-icon">
            <h2>Give us a follow to SAVE 20% on your next order</h2>
            <div className="social">
            <FiInstagram size={40} /> &nbsp;&nbsp;&nbsp;&nbsp;
            <FiFacebook size={40} /> &nbsp;&nbsp;&nbsp;&nbsp;
            <FiTwitter size={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Successful;
