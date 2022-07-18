import React from "react";
import "../../Sass/Cart.scss";
import { BiPencil,BiTrash,BiHeart,BiLockAlt } from 'react-icons/bi';
import { FiLock } from 'react-icons/fi';
import Pay from '../../Images/pay1.png'
import Accordian from "../Products/Accordian";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="container cart">
      <h1>Your Shopping Bag</h1>
      <hr />
      <div className="aem-Grid aem-Grid--12">
        {cartItems.length === 0 && <div>Cart is empty</div>}
        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
          {cartItems.map((item) => (
            <div key={item.id} className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--6 badge">
                <div className="product">
                  <div>
                    <img src={item.image} height="180px" width="160px" />
                  </div>
                  <div>
                    <h5>{item.title.substring(0, 18)}</h5>
                    <h6>Size : Medium</h6>
                    <h6>Color : Storm</h6>
                    <h6>${item.price}</h6>
                  </div>
                </div>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--6">
                {/* <div className="input-group w-auto align-items-center">
                  <input
                    type="button"
                    value="-"
                    className="button-minus border rounded-circle"
                    data-field="quantity"
                    onClick={() => onRemove(item)}
                  />&nbsp;&nbsp;
                  <h6 className="quant">{item.qty}</h6>&nbsp;&nbsp;
                  <input
                    type="button"
                    value="+"
                    className="button-plus border rounded-circle"
                    data-field="quantity"
                    onClick={() => onAdd(item)}
                  />
                </div> */}
                <div className="group">
                <p>
                  <button className="border" onClick={() => onRemove(item)}>-</button>&nbsp;&nbsp;
                  <span className="quant">{item.qty}</span>&nbsp;&nbsp;
                  <button className="border" onClick={() => onAdd(item)}>+</button>
                </p>
                </div>
              </div>

              <div className="aem-GridColumn aem-GridColumn--default--3 icon">
                <p><BiPencil size={18}/> Edit item</p>
                <p><BiTrash size={18}/> Remove&nbsp;</p>
                <p><BiHeart size={18}/> Save&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              </div>
            </div>
          ))}
          <div className="accordian">
          <Accordian />
          </div>
        </div>

        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 checkout">
          {cartItems.length !== 0 && (
            <>
            <h5>Pricing Summary</h5>
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--6">
                <h6>Subtotal</h6>
                <h6>Coupon</h6>
                <h6>Gift Card</h6>
                <h6>Estimated tax</h6>
                <h6>Estimated shipping</h6>
                <h6><strong>Estimated Total</strong></h6>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--6 text-right">
                <h6>${itemsPrice.toFixed(2)}</h6>
                <h6>${taxPrice.toFixed(2)}</h6>
                <h6>${shippingPrice.toFixed(2)}</h6>
                <h6>${shippingPrice.toFixed(2)}</h6>
                <h6>${shippingPrice.toFixed(2)}</h6>
                <h6><strong>${totalPrice.toFixed(2)}</strong></h6>
              </div>
            </div>
              <div className="buttons">
              <div>
                <button
                  onClick={() => alert("Implement Checkout!")}
                  className="check"
                >
                  <FiLock size={18}/>&nbsp;&nbsp;CHECKOUT
                </button>
                </div>
                <div>
                  <button className="pay"><img src={Pay} alt="Submit" /></button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Accordion */}

      {/* <div className="aem-Grid aem-Grid--12">
        <div className="aem-GridColumn aem-GridColumn--default--7">
        <Accordian />
        </div>
      </div> */}

      {/* Recently Viewed */}

      {/* <div>
      <h1>Recently Viewed</h1>
        
      
      </div> */}
    </div>
  );
}
