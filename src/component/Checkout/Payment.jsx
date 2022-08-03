import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Payment = () => {
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
            <h6>3. Payment Information</h6>
            <form>
              <div className="shipping">
                <input type="radio" id="" name="" value="" />
                <label for="">&nbsp;&nbsp;Credit Card</label>
              </div>
              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                  <label className="">Name on Card</label>
                  <input
                    type="email"
                    className=""
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />

                  <label className="">Credit Card Number</label>
                  <input
                    type="text"
                    className=""
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />

                  <label className="">Expiration Date</label>
                  <input
                    type="text"
                    className=""
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="shipping">
              <hr />
                <input type="radio" id="" name="" value="" />
                <label for="">&nbsp;&nbsp;PayPal</label>
                <hr />
              </div>
            </form>

            <div className="button">
              <button><NavLink to='/finalCeck'>CONTINUE TO REVIEW ORDER</NavLink></button>
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

export default Payment;
