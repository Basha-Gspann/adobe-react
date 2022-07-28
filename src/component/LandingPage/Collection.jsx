import React from 'react';
import Image from "../../Images/new.png";

const Collection = () => {
  return (
    <>
     <div className="container collection">
        <div className="aem-Grid aem-Grid--12">
          <div className="content aem-GridColumn aem-GridColumn--default--7">
            <h1>Take off in the new Signature Legging</h1>
            <h5>Lorem Ipsum Dolor Tempor</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore
              magna.
            </p>
            <div class="btn-group">
              <button type="button" class="btn btn-default">
              SHOP COLLECTION
              </button>
              <button type="button" class="btn btn-default">
              SHOP NOW
              </button>
            </div>

            <hr/>
          </div>

          <div className="aem-GridColumn aem-GridColumn--default--5">
            <img src={Image} alt="" />
          </div>
        </div>
      </div> 
    </>
  )
}

export default Collection
