import React from "react";
import "../Sass/Hero.scss";
import hero from "../Images/hero.jfif";

function Hero() {
  return (
    <>
      <div className="container herosection">
        <div class="aem-Grid aem-Grid--12 desk">
          <div class="aem-GridColumn aem-GridColumn--default--5">
            <div class="cardr">
              <h1>women's</h1>
              <hr />
            </div>
          </div>
          <div class="aem-GridColumn aem-GridColumn--default--7">
            <div class="card-img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="herosection mobile">
        <div className="back">
          <img src={hero} alt="" />
          <div className="cardr">
          <h1>Women’s <br/>Outerwear</h1>
          <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
