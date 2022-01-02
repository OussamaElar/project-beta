import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
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
                        <p key={i}>{product.title}</p>
                  ))}
            </div>
      )
}

export default withRouter(Products); 