import React, { useState, useEffect } from 'react';



const ProductShow = (props) => {
      const { product } = props;
      
      useEffect(() => {
            props.fetchProduct(props.match.params.productId);
           
      }, [])
      if (!product) return null
      return (
            <div>
                  <div>
                        <img></img>
                  </div>
                  <div>
                        <h1>{ product.title }</h1>
                        <p>{ product.description }</p>
                  </div>
                  <div>
                        <h4>{ product.price }</h4>
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                  </div>
            </div>
      )
}

export default ProductShow;