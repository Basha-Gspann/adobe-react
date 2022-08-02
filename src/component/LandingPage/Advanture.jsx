import React from "react";
import Image from "../../Images/adventure.png";
import { FiMapPin } from "react-icons/fi";

const Advanture = () => {
  return (
    <>
      <div className="container adventure">
        <div className="aem-Grid aem-Grid--12 desktop">
          <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
            <img src={Image} alt="" />
          </div>

          <div className="content aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
            <h1>Conquer your next adventure</h1>
            <h5>Lorem Ipsum Dolor Tempor</h5>
            <button>SHOP DEVICES</button>
            <FiMapPin size={40} />
            <hr />
          </div>
        </div>
      </div>

      <div className="adventure mobile">
        <div className="aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
            <img src={Image} alt="" />
          </div>

          <div className="container content aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
            <FiMapPin size={40} />
            <hr />
            <h1>Conquer your next adventure</h1>
            <h5>Lorem Ipsum Dolor Tempor</h5>
            <button>SHOP DEVICES</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advanture;
