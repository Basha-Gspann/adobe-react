import React from "react";
import "../../Sass/Filter.scss";
import { NavLink } from "react-router-dom";

const categories = [
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

const Filter = ({ filterProduct, setCategory, selectedCategory }) => {
  return (
    <div className="container filter">
      <div>
        <h4>Filters</h4>
        <hr />
      </div>

      <div>
        {/* <ul>
                <li>
                <input onClick={() =>filterProduct("men's clothing")} type="checkbox" id="option" name="option" value="option" />
            <label>Women</label>
                </li>

                <li>
                <input onClick={() =>filterProduct("women's clothing")} type="checkbox" id="option" name="option" value="option" />
            <label>Men</label>
                </li>

                <li>
                <input onClick={() =>filterProduct("jewelery")} type="checkbox" id="option" name="option" value="option" />
            <label>Smart Gear</label>
                </li>

                <li>
                <input onClick={() =>filterProduct("electronics")} type="checkbox" id="option" name="option" value="option" />
            <label>Accessories</label>
                </li>
            </ul> */}

        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          {categories?.map((category) => (
            <li>
              <input type="checkbox"
                id="option"
                name="option"
                value="option" className={`nav-link ${
                category.filter === selectedCategory ? "active" : ""
              } `}
              aria-current="page"
              onClick={() => setCategory(category.filter)}
id="hover-underline-animation" />
              <label>{category.displayName}</label>
            </li>
          ))}
        </ul>
      </div>
      {/* <div>
            <h6>Size</h6>
            <ul>
                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>X-Small</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Small</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Medium</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Large</label>
                </li>
            </ul>
            <div className="showmore">
              <a href="#show" className="">
                <p>show more</p>
              </a>
            </div>
            <hr />
          </div>
          <div>
            <h6>Style</h6>
            
            <ul>
                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Outdoor</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Casual</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Athleisure</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Running</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Active</label>
                </li>
            </ul>
            <hr />
          </div> */}

      <>
        {/* <div>
              <h6>Color</h6>
            </div>
            <div className="filter-color aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div className="color"></div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div className="color1"></div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div className="color2"></div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div className="color3"></div>
                </div>
            </div>

            <div className="filter-color aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div className="color4"></div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div className="color5"></div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div className="color6"></div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div className="color7"></div>
                </div>
            </div>

            <div className="filter-color aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div className="color8"></div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--3">
                <div className="color9"></div>
                </div>
            </div> */}
      </>

      {/* <hr /> */}
      {/* <div>
            <h6>Brand</h6>
            <ul>
                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Calvin Klein</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Gabbana</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Miu Miu</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Pada</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Gucci</label>
                </li>

                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Rag & Bone</label>
                </li>
                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Chanel</label>
                </li>
                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Marni</label>
                </li>
                <li>
                <input type="checkbox" id="option" name="option" value="option" />
            <label>Dior</label>
                </li>

            </ul>
            <hr />
          </div> */}
    </div>
  );
};

export default Filter;
