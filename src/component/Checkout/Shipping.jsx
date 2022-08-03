import React from "react";
import { FiEdit2 } from 'react-icons/fi';
import { NavLink } from "react-router-dom";

const Shipping = () => {
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
                  <p><strong>Shipping Information</strong></p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 text-right">
                  <p className="edit"><FiEdit2/> Edit</p>
                </div>
              </div>

              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                  <p className="details">q_farhan@gmail.com +1 (555) 229-3367</p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                  <p className="details">
                    Qadim Farhan 1098 Wapello Street Altadena, California 91001
                    United States
                  </p>
                </div>
              </div>
            </div>
            <h6>2. Shipping Method</h6>
            <form>
              <div className="shipping">
              <label for="">
              <input type="radio" id="" name="" value="" />&nbsp;
                Standard Shipping (4-8 business days via USPS) FREE
              </label>
              <br />
              
              <label for="">
              <input type="radio" id="" name="" value="" />&nbsp;
                Express Delivery (2-5 business days via USPS) $17.95
              </label>
              <br />
              
              <label for="">
              <input type="radio" id="" name="" value="" />&nbsp;
                Next Day Delivery (Next business days via FedEx) $53.61
              </label>
              </div>
            </form>

            <div className="button">
              <button><NavLink to='/payment'>CONTINUE TO PAYMENT</NavLink></button>
            </div>

            <div className="multi">
              <hr />
              <h6>3. Payment Information</h6>
              <hr />
            </div>
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
                  <strong>Est. Total</strong>
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

export default Shipping;
