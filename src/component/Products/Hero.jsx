import React from "react";
import "../../Sass/Hero.scss";
import hero from "../../Images/hero1.jpg";

const getCategoryName = (section) => {
  if (section === "women's clothing") return "Women's";

  if (section === "men's clothing") return "Men's";

  if (section === "jewelery") return "Smart Gear";

  if (section === "electronics") return "Accessories";

  return section;
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
