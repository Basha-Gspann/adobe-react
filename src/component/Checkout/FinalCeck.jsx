import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const FinalCeck = () => {
  return (
    <>
      <div className="info container">
      <h1>Checkout</h1>
        <hr className="hr" />
        <h2>Guest Checkout</h2>
        <div className="aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
            <div className="price">
              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6">
                  <p>
                    <strong>Shipping Information</strong>
                  </p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 text-right">
                  <p className="edit">
                    <FiEdit2 /> Edit
                  </p>
                </div>
              </div>

              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                  <p className="details">
                    q_farhan@gmail.com +1 (555) 229-3367
                  </p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                  <p className="details">
                    Qadim Farhan 1098 Wapello Street Altadena, California 91001
                    United States
                  </p>
                </div>
              </div>
            </div>
            <br />

            <div className="price">
              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6">
                  <p>
                    <strong>Shipping Method</strong>
                  </p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 text-right">
                  <p className="edit">
                    <FiEdit2 /> Edit
                  </p>
                </div>
              </div>

              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                  <p className="details">
                    Standard Shipping Est. delivery in 4 - 8 business days FREE
                  </p>
                </div>
              </div>
            </div>
            <br />

            <div className="price">
              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6">
                  <p>
                    <strong>Payment Information</strong>
                  </p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 text-right">
                  <p className="edit">
                    <FiEdit2 /> Edit
                  </p>
                </div>
              </div>

              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                  <p className="details">Credit Card Visa ending in 4567</p>
                </div>
              </div>
            </div>
            <br />

            <div className="price">
              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6">
                  <p>
                    <strong>3 items in your order</strong>
                  </p>
                </div>
              </div>

              <div className="aem-Grid aem-Grid--12">
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
            </div>

            <div className="button">
              <button><NavLink to='/successful'>PLACE ORDER</NavLink></button>
            </div>
            <p className="text-center">By clicking confirm order you agree to our <a href="">Terms and Conditions</a></p>
          </div>
          

          <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
            <div className="aem-Grid aem-Grid--12 price">
              <h6>Pricing Summary</h6>
              <div className="aem-GridColumn aem-GridColumn--default--6">
                <p>Subtotal</p>
                <p>Coupon</p>
                <p>Gift Card</p>
                <p>Estimated tax</p>
                <p>Est. shipping</p>
                <p>
                  <strong>Estimated Total</strong>
                </p>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--6 text-right">
                <p>$ 388.00</p>
                <p>- $ 77.60</p>
                <p>- $ 100.00</p>
                <p>$ 23.28</p>
                <p>FREE</p>
                <p>
                  <strong>$ 233.68</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalCeck;
