import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import ProductListItems from './products_list_items'
import './product.css';


const Products = (props) => {
      const { fetchProducts, products } = props;
      
      // const fetchData = () => {
      //      return setProducts(props.products)
      // }
      
      useEffect(() => {   
            fetchProducts();
      }, [fetchProducts])
      
      return (
            <div>
                  
                  {products.map((product, i) => (
                        <ProductListItems product={product} key={i}/>
                  ))}
            </div>
      )
}

export default withRouter(Products); 