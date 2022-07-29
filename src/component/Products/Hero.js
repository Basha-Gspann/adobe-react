import React from "react";
import "../../Sass/Hero.scss";
import hero from "../../Images/hero.jpg";

const getCategoryName = (cat) => {
  if (cat == "women's clothing") return "Women's clothing";

  if (cat == "men's clothing") return "Men's clothing";

  if (cat == "jewelery") return "Smart Gear";

  if (cat == "electronics") return "Accessories";

  return cat;
};

function Hero({category}) {
  return (
    <>
      <div className="herosection">
        <div className="aem-Grid aem-Grid--12 desk">
          <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
            <div className="cardr">
              <h1>{getCategoryName(category)}</h1>
              <hr />
            </div>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
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
              <h1>
              {getCategoryName(category)}
              </h1>
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
