import React, {useState} from 'react'
import Products from './Products';
import Filter from './Filter';
import Hero from './Hero';
import Breadcrum from './Products/Breadcrum';


function Home({category}) {
    return (
        <>
        <Hero />
        <div>
        <Breadcrum/>
        </div>
        <div className="aem-Grid aem-Grid--12 container">
        <div className="aem-GridColumn aem-GridColumn--default--3">
            
            <Filter />
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
         <Products category={category} />
        </div>
        </div>
        </>
       
    )
}

export default Home
