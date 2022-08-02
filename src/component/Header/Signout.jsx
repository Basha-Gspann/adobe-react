import React from "react";
import "../../Sass/Signout.scss";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiUser } from "react-icons/fi";

function Signout() {
  return (
    <div className="container">
      <div className="signout">
        <ul>
          <li>
            <FiArrowLeft size={23} />
          </li>
          <li>
            <FiUser size={23} />
          </li>
          <li>
            <h5>Account</h5>
          </li>
        </ul>
      </div>
      <div>
        <a href="" className="">
          <p>Order History</p>
        </a>
      </div>

      <div>
        <a href="" className="">
          <p>Store Credit & Gift Cards</p>{" "}
        </a>
      </div>

      <div>
        <a href="" className="">
          <p>Favorites Lists</p>
        </a>
      </div>

      <div>
        <a href="" className="">
          <p>Address Book</p>
        </a>
      </div>

      <div>
        <a href="" className="">
          <p>Saved Payments</p>
        </a>
      </div>

      <div>
        <a href="" className="">
          <p>Communications</p>
        </a>
      </div>

      <div>
        <a href="" className="">
          <p>Account Information</p>
        </a>
      </div>

      <div>
        <a href="" className="">
          <p>Sign out</p>
        </a>
      </div>
    </div>
  );
}

export default Signout;
