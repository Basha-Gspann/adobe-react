import React from "react";
import "../Sass/Navmob.scss";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const categories = [
  {
    filter: "women's clothing",
    displayName: "Women",
  },
  {
    filter: "men's clothing",
    displayName: "Men",
  },
  {
    filter: "jewelery",
    displayName: "Smart Gear",
  },
  {
    filter: "electronics",
    displayName: "Accessories",
  },
];
const Navmob = ({ setCategory, selectedCategory, ...props }) => {
  return (
    <div className="navmob">
      <div class="navbar">
        <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div class="logo">
            {/* <span class="">Cart  < FiSearch /><FiShoppingBag/></span> */}
            <div className="logomob">
            <h2><a href="/"><span>V</span>ENIA</a></h2>
            </div>
            <NavLink to="/login" className="loginmob">
              <FiSearch size={25}/>&nbsp;&nbsp;&nbsp;&nbsp;
            </NavLink>
            <NavLink to="" className="loginmob">
              <FiShoppingBag size={25}/>
            </NavLink>
            {/* <NavLink to="/cart" className="btn btn-outline-dark ms-2"> <i className="fa fa-shopping-cart me-1"></i>Cart(0)</NavLink> */}
            <NavLink to="/cart" className="cart">
              {" "}
              {props.countCartItems ? (
                <p className="btn">{props.countCartItems}</p>
              ) : (
                ""
              )}
            </NavLink>{" "}
          </div>

          <div class="menu-items">
            {/* <li><a href="#">Women</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Smart Gear</a></li>
        <li><a href="#">Accessories</a></li> */}
            <ul className="">
              {categories?.map((category) => (
                <li
                  className={`nav-link ${
                    category.filter === selectedCategory ? "active" : ""
                  } `}
                  aria-current="page"
                  onClick={() => setCategory(category.filter)}
                >
                  {category.displayName}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navmob;
