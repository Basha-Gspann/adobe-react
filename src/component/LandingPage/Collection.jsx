import React from 'react';
import Image from "../../Images/new.png";

const Collection = () => {
  return (
    <>
     <div className="container collection">
        <div className="aem-Grid aem-Grid--12 desktop">
          <div className="content aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
            <h1>Take off in the new Signature Legging</h1>
            <h5>Lorem Ipsum Dolor Tempor</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore
              magna.
            </p>
            <div class="btn-group">
              <div className='collect'>
              <button type="button" class="btn btn-default">
              SHOP COLLECTION
              </button>
              </div>
              <button type="button" class="btn btn-default">
              SHOP NOW
              </button>
            </div>

            <hr/>
          </div>

          <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
            <img src={Image} alt="" />
          </div>
        </div>

        <div className="aem-Grid aem-Grid--12 mobile">

        <div className="aem-GridColumn--phone--12">
            <img src={Image} alt="" />
          </div>
          
          <div className="content aem-GridColumn--phone--12">
            <h1>Take off in the new Signature Legging</h1>
            <h5>Lorem Ipsum Dolor Tempor</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore
              magna.
            </p>
            <div class="">
            <button type="button" class="btn btn-default">
              SHOP NOW
              </button>
              <br />
              <br />
              <div className='collect'>
              <button type="button" class="btn btn-default">
              SHOP COLLECTION
              </button>
              </div>
            </div>

            <hr/>
          </div>

        </div>
      </div> 
    </>
  )
}

export default Collection
