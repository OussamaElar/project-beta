import React, { useState, useEffect } from 'react';
import './product_show.css'



const ProductShow = (props) => {
      const { product } = props;
      
      useEffect(() => {
            props.fetchProduct(props.match.params.productId);
           
      }, [])
      if (!product) return null
      return (
            <div className='product_show'>
                  <div className='image_div'>
                        <img src=''></img>
                  </div>
                  <div className='product_info'>
                        <h1>{ product.title }</h1>
                        <p>{ product.description }</p>
                  </div>
                  <div className='product_show_actions'>
                        <h4>Price: { product.price }.00$</h4>
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                  </div>
            </div>
      )
}

export default ProductShow;