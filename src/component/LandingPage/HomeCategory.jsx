import React from 'react'

const HomeCategory = () => {
  return (
    <>
     <div className='homecategory container aem-Grid aem-Grid--12'>
      <div className='cato aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
        <div className='box box1'>
          <div className='box-content'>
            <h4>Shop Women</h4>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>

      <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
        <div className='box box2'>
          <div className='box-content'>
            <h4>Shop Men</h4>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>

      <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
        <div className='box box3'>
          <div className='box-content'>
            <h4>Jewellery</h4>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>

      <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12'>
        <div className='box box4'>
          <div className='box-content'>
            <h4>Electronics</h4>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default HomeCategory
