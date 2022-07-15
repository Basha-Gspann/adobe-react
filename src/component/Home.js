import React, {useState} from 'react'
import Products from './Products';
import Filter from './Filter';
import Hero from './Hero';
import Breadcrum from './Breadcrum';


function Home({category}) {
    return (
        <>
        <Hero />
        <div>
        <Breadcrum/>
        </div>
        <div class="aem-Grid aem-Grid--12 container">
        <div class="aem-GridColumn aem-GridColumn--default--3">
            
            <Filter />
        </div>
        <div class="aem-GridColumn aem-GridColumn--default--9">
         <Products category={category} />
        </div>
        </div>
        </>
       
    )
}

export default Home
