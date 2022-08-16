import React from "react";
import { NavLink } from "react-router-dom";
import "../../Sass/Checkout.scss";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {reduxForm} from 'redux-form';

const Info = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();


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

            <form onSubmit={handleSubmit()}>
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--6  aem-GridColumn--phone--12">
              <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="col-form-label"
                          >
                            Email
                          </label>
                          <input
                            type="text"
                            placeholder="abc@gmail.com"
                            className={`form-control ${
                              errors.email && "invalid"
                            }`}
                            {...register("email", {
                              required: "Please enter email",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid Email address",
                              },
                            })}
                            onKeyUp={() => {
                              trigger("email");
                            }}
                          />
                          {errors.email && (
                            <small className="text-danger">
                              {errors.email.message}
                            </small>
                          )}
                        </div>

                <h6>1. Shipping Information</h6>

                <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="col-form-label"
                          >
                            Country
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.countryName && "invalid"
                            }`}
                            {...register("countryName", {
                              required: "Please enter the country",
                            })}
                            onKeyUp={() => {
                              trigger("countryName");
                            }}
                          />
                          {errors.countryName && (
                            <small className="text-danger">
                              {errors.countryName.message}
                            </small>
                          )}
                        </div>
              </div>

              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <div className="form-group">
                          <label for="Phone Number1" className="col-form-label">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.phoneNumber && "invalid"
                            }`}
                            placeholder="2222222222"
                            {...register("phoneNumber", {
                              required: "Please enter phone number",
                              maxLength: {
                                value: 10,
                                message: "error message", // JS only: <p>error message</p> TS only support string
                              },
                            })}
                            onKeyUp={() => {
                              trigger("phoneNumber");
                            }}
                          />
                          {errors.phoneNumber && (
                            <small className="text-danger">
                              {errors.phoneNumber.message}
                            </small>
                          )}
                        </div>
              </div>
            </div>

            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="col-form-label"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.fname && "invalid"
                            }`}
                            {...register("fname", {
                              required: "Please enter first name",
                            })}
                            onKeyUp={() => {
                              trigger("fname");
                            }}
                          />
                          {errors.fname && (
                            <small className="text-danger">
                              {errors.fname.message}
                            </small>
                          )}
                        </div>

                        <div className="form-group">
                          <label for="exampleFormControlInput1">
                            Street Address
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.streetAddress && "invalid"
                            }`}
                            {...register("streetAddress", {
                              required: "Please enter address",
                            })}
                            onKeyUp={() => {
                              trigger("streetAddress");
                            }}
                          />
                          {errors.streetAddress && (
                            <small className="text-danger">
                              {errors.streetAddress.message}
                            </small>
                          )}
                        </div>

                        <div className="form-group">
                          <label for="exampleFormControlInput1">City</label>
                          <input
                            type="text"
                            placeholder="Altadena"
                            className={`form-control ${
                              errors.city && "invalid"
                            }`}
                            {...register("city", {
                              required: "Please enter the country",
                            })}
                            onKeyUp={() => {
                              trigger("city");
                            }}
                          />
                          {errors.city && (
                            <small className="text-danger">
                              {errors.city.message}
                            </small>
                          )}
                        </div>
              </div>

              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
              <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="col-form-label"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.lname && "invalid"
                            }`}
                            {...register("lname", {
                              required: "Please enter last name",
                            })}
                            onKeyUp={() => {
                              trigger("lname");
                            }}
                          />
                          {errors.lname && (
                            <small className="text-danger">
                              {errors.lname.message}
                            </small>
                          )}
                        </div>

                        <div className="form-group">
                          <label for="exampleFormControlInput1">
                            Street Address 2
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.streetAddress1 && "invalid"
                            }`}
                            {...register("streetAddress1", {
                              required: "Please enter address 2",
                            })}
                            onKeyUp={() => {
                              trigger("streetAddress1");
                            }}
                          />
                          {errors.streetAddress1 && (
                            <small className="text-danger">
                              {errors.streetAddress1.message}
                            </small>
                          )}
                        </div>

                        <div className="form-group">
                                <label className="col-form-label">State</label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.state && "invalid"
                                  }`}
                                  {...register("state", {
                                    required: "Please enter state",
                                  })}
                                  onKeyUp={() => {
                                    trigger("state");
                                  }}
                                />
                                {errors.state && (
                                  <small className="text-danger">
                                    {errors.state.message}
                                  </small>
                                )}
                              </div>
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
                <button><NavLink to="/signin">SIGN IN</NavLink></button>
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

export default Info;
