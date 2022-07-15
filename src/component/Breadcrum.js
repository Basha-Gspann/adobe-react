import React from "react";
import "../Sass/Filter.scss";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Dropdown from 'react-bootstrap/Dropdown';
import { FiSliders } from "react-icons/fi";
import {RiArrowUpDownLine} from "react-icons/ri";

function Breadcrum() {
  return (
    <div className="container bread">
      <div class="aem-Grid aem-Grid--12 desk">
        <div class="aem-GridColumn aem-GridColumn--default--3">
          <div>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="text.primary" href="/">
                Clothing
              </Link>
              <Link underline="hover" color="text.primary" href="/">
                Women’s
              </Link>
              <Link underline="hover" color="text.primary" href="/">
                Outerwear
              </Link>
            </Breadcrumbs>
          </div>
        </div>

        <div className="aem-GridColumn aem-GridColumn--default--9">
        <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--10">
                <h6>38 Results</h6>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--2 dropdown">
                <Dropdown className="dropdoen">
                  <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                  Sort by Latest
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Popularity</Dropdown.Item>
                    <Dropdown.Item href="#">
                    Newest First
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                    Price -- Low to High
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                    Price -- High to Low
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
        </div>
      </div>

      <div className="mobile">
      <div className="cato">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="text.primary" href="/">
                Clothing
              </Link>
              <Link underline="hover" color="text.primary" href="/">
                Women’s
              </Link>
              <Link underline="hover" color="text.primary" href="/">
                Outerwear
              </Link>
            </Breadcrumbs>
          </div>

          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--6">
              <h5><FiSliders/>&nbsp;&nbsp;&nbsp;Filter Results</h5>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6">
              <h5><RiArrowUpDownLine/>&nbsp;&nbsp;&nbsp;Sort by Latest</h5>
            </div>
          </div>

          <h6>38 Results</h6>
      </div>
    </div>
  );
}

export default Breadcrum;
