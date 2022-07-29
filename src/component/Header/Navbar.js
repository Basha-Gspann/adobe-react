import React from "react";
import "../../Sass/Navbar.scss";
import { NavLink } from "react-router-dom";

import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";

const categories = [
  {
    displayName: <a href="/landing-page">Home</a>,
  },
  {
    filter: "women's clothing",
    displayName: <a href="/#">Women</a>,
  },
  {
    filter: "men's clothing",
    displayName: <a href="/#">Men</a>,
  },
  {
    filter: "jewelery",
    displayName: <a href="/#">Smart Gear</a>,
  },
  {
    filter: "electronics",
    displayName: <a href="/#">Accessories</a>,
  },
];
const Navbar = ({ setCategory, selectedCategory, ...props }) => {
  return (
    <div className="navdesk">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="logo">
            <h2><a href="/landing-page"><span>V</span>ENIA</a></h2>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {categories?.map((category) => (
                <li
                  className={`nav-link ${
                    category.filter === selectedCategory ? "active" : ""
                  } `}
                  aria-current="page"
                  onClick={() => setCategory(category.filter)} id="hover-underline-animation"
                >
                  {category.displayName}
                </li>
              ))}
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="login">
                <FiSearch size={25}/>&nbsp;
                Search
              </NavLink>
              <NavLink to="/signin" className="signin">
                <FiUser size={25}/>&nbsp;
                Signin
              </NavLink>&nbsp;
              {/* <NavLink to="/cart" className="btn btn-outline-dark ms-2"> <i className="fa fa-shopping-cart me-1"></i>Cart(0)</NavLink> */}
              <NavLink to="/cart" className="cart">
                <FiShoppingBag size={25}/>{" "}
                {props.countCartItems ? (
                  <button className="btn btn-success">
                    {props.countCartItems}
                  </button>
                ) : (
                  ""
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
