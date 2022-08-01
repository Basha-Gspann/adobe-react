import React from "react";
import { NavLink } from "react-router-dom";
import "../../Sass/Checkout.scss";

const Info = () => {
  return (
    <>
      <div className="info container">
      <h1>Checkout</h1>
        <hr className="hr" />
        <div className="aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
            <h2>Guest Checkout</h2>
            <h6>Contact information</h6>
            <p>
              We’ll use these details to keep you informed on your delivery.
            </p>

            <form action="">
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--6  aem-GridColumn--phone--12">
                <label className="">Email ID&nbsp;&nbsp;</label>
                <input
                  type="email"
                  className=""
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="abc@xyz.com"
                />

                <h6>1. Shipping Information</h6>

                <label className="">Country&nbsp;&nbsp;</label>
                <input
                  type="text"
                  className=""
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="United States"
                />
              </div>

              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <label className="">Phone Number</label>
                <input
                  type="tel"
                  className=""
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="(222) 222-2222"
                />
              </div>
            </div>

            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <label className="">First Name</label>
                <input
                  type="text"
                  className=""
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />

                <label className="">Street Address</label>
                <input
                  type="text"
                  className=""
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />

                <label className="">City &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input
                  type="text"
                  className=""
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Altadena"
                />
              </div>

              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <label className="">Last Name</label>
                <input
                  type="text"
                  className=""
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />

                <label className="">Street Address 2</label>
                <input
                  type="text"
                  className=""
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />

                <label className="">State &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input
                  type="text"
                  className=""
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="California"
                />
              </div>
            </div>

            <div className="button">
              <button><NavLink to="/shipping">CONTINUE TO SHIPPING METHOD</NavLink></button>
            </div>
            </form>

            <div className="multi">
              <hr />
              <h6>2. Shipping Method</h6>
              <hr />
              <h6>3. Payment Information</h6>
              <hr />
            </div>
          </div>

          <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">

          <div className="aem-Grid aem-Grid--12 price price-mob">
              <div className="aem-GridColumn aem-GridColumn--default--6">
                <h6>
                  Sign in for Express Checkout
                </h6>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--6 text-right">
                {/* <h6>
                  <strong>$ 233.68</strong>
                </h6> */}
                <button>SIGN IN</button>
              </div>
            </div>
            <br/>
            
            <div className="aem-Grid aem-Grid--12 price">
            <h6>Pricing Summary</h6>
              <div className="aem-GridColumn aem-GridColumn--default--6">
                <p>Subtotal</p>
                <p>Coupon</p>
                <p>Gift Card</p>
                <p>Estimated tax</p>
                <p>Estimated shipping</p>
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

export default Info;
