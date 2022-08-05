import React from "react";
import "../../Sass/Navmob.scss";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Logo from '../../Images/logo.png'

const categories = [
  {
    displayName: <NavLink to="/">Home</NavLink>,
  },
  {
    filter: "women's clothing",
    displayName: <NavLink to="/home">Women</NavLink>,
  },
  {
    filter: "men's clothing",
    displayName: <NavLink to="/home">Men</NavLink>,
  },
  {
    filter: "jewelery",
    displayName: <NavLink to="/home">Smart Gear</NavLink>,
  },
  {
    filter: "electronics",
    displayName: <NavLink to="/home">Accessories</NavLink>,
  },
];
const Navmob = ({ setCategory, selectedCategory, ...props }) => {
  return (
    <div className="navmob">
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="logo">
            {/* <span className="">Cart  < FiSearch /><FiShoppingBag/></span> */}
            <div className="logomob">
            {/* <h2><a href="/"><span>V</span>ENIA</a></h2> */}
            <NavLink to='/'><img src={Logo} alt="" /></NavLink>
            </div>
            <NavLink to="/login" className="loginmob">
              <FiSearch size={25}/>&nbsp;&nbsp;&nbsp;&nbsp;
            </NavLink>
            <NavLink to="" className="loginmob">
              <FiShoppingBag size={25}/>
            </NavLink>
            {/* <NavLink to="/cart" className="btn btn-outline-dark ms-2"> <i className="fa fa-shopping-cart me-1"></i>Cart(0)</NavLink> */}
            <NavLink to="/cart" className="cart">
              
              {props.countCartItems ? (
                <p className="btn">{props.countCartItems}</p>
              ) : (
                ""
              )}
            </NavLink>
          </div>

          <div className="menu-items">
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
