import React, {Component} from 'react'
import {getProductData} from '../component/Api/ProductsApi';
import store from '../redux/store';
import { connect } from 'react-redux';



class Sample extends Component {
    constructor(props) {
        super(props);
    
    this.state={};
    
    }
    componentDidMount()
    {
        if (!this.props.products)
        this.getProductsdata();
    }
    getProductsdata(){
        getProductData();
    }
  render() {
    console.log(this.props.products)
    return(
<div>
      <h1>Sample page</h1>
      </div>
    )
   } 
}
const mapStateToProps=function(store){
    return{
        products:store.products
    }
}

export default connect(mapStateToProps) (Sample);
