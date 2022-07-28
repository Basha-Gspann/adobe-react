import React from 'react';
import '../../Sass/Landing.scss';
import { Carousel } from "react-bootstrap";
import Slide1 from "../../Images/slide1.jpg";
import Slide2 from "../../Images/slide2.jpg";
import Slide3 from "../../Images/slide3.jpg";

const Banner = () => {
  return (
    <>
     <Carousel fade={true} pause={false}>
        <Carousel.Item>
          <div className="slider aem-Grid aem-Grid--12">
            <div className="slide-content aem-GridColumn aem-GridColumn--default--6">
              <h1>Shop the new Signature Collection</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
                nihil magnam omnis optio, voluptatum laborum, dolorem accusamus
                ullam rem a dolore! Voluptatum harum tenetur eos similique
                incidunt voluptas cumque nisi?
              </p>
              <button>SHOP NOW</button>
            </div>

            <div className="slider-img aem-GridColumn aem-GridColumn--default--6">
              <img className="d-block w-100" src={Slide1} alt="First slide" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider aem-Grid aem-Grid--12">
            <div className="slide-content aem-GridColumn aem-GridColumn--default--6">
              <h1>Shop the new Signature Collection</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
                nihil magnam omnis optio, voluptatum laborum, dolorem accusamus
                ullam rem a dolore! Voluptatum harum tenetur eos similique
                incidunt voluptas cumque nisi?
              </p>
              <button>SHOP NOW</button>
            </div>

            <div className="slider-img aem-GridColumn aem-GridColumn--default--6">
              <img className="d-block w-100" src={Slide2} alt="First slide" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider aem-Grid aem-Grid--12">
            <div className="slide-content aem-GridColumn aem-GridColumn--default--6">
              <h1>Shop the new Signature Collection</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
                nihil magnam omnis optio, voluptatum laborum, dolorem accusamus
                ullam rem a dolore! Voluptatum harum tenetur eos similique
                incidunt voluptas cumque nisi?
              </p>
              <button>SHOP NOW</button>
            </div>

            <div className="slider-img aem-GridColumn aem-GridColumn--default--6">
              <img className="d-block w-100" src={Slide3} alt="First slide" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Banner
