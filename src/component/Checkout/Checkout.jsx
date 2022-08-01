import React from "react";
import "../../Sass/Checkout.scss";
import Info from "../Checkout/Info";
import Shipping from "../Checkout/Shipping";
import Payment from "../Checkout/Payment";
import FinalCeck from "../Checkout/FinalCeck";

const Checkout = () => {
  return (
    <>
      <div className="">
        <h1>Checkout</h1>
        <hr className="hr" />
        {/* <Info /> */}
        {/* <Shipping />
        <Payment />
        <FinalCeck /> */}
      </div>
    </>
  );
};

export default Checkout;
