import Products from './Products';
import Filter from './Filter';
import Hero from './Hero';
import Breadcrum from './Breadcrum';


function Home({category,setCategory}) {
    return (
        <>
        <Hero category={category}/>
        <div>
        <Breadcrum/>
        </div>
        <div className="aem-Grid aem-Grid--12 container">
        <div className="aem-GridColumn aem-GridColumn--default--3">
            
            <Filter setCategory={setCategory}
        selectedCategory={category} />
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
         <Products category={category} />
        </div>
        </div>
        {/* <div className='container'>
        <Products category={category} />
        </div> */}
        </>
       
    )
}

export default Home
