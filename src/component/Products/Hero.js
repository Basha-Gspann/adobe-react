import React from "react";
import "../../Sass/Hero.scss";
import hero from "../../Images/hero.jpg";

function Hero() {
  return (
    <>
      <div className="container herosection">
        <div className="aem-Grid aem-Grid--12 desk">
          <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
            <div className="cardr">
              <h1>women's</h1>
              <hr />
            </div>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
            <div className="card-img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
        </div>

        <div className="herosection mobileh">
        <div className="aem-Grid aem-Grid--12">
      <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
            <div className="card-img">
              <img src={hero} alt="" />
            </div>
          </div>

          <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
            <div className="cardr">
              <h1>Women’s <br/>Outerwear</h1>
              <hr />
            </div>
          </div>
          
        </div>
        </div>

      {/* <div className="herosection mobile">
        <div className="back">
          <img src={hero} alt="" />
          <div className="cardr">
          <h1>Women’s <br/>Outerwear</h1>
          <hr />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Hero;
