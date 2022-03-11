import React from 'react';


const ProductListItems = (props) => {
      const { product } = props;
      

      return (
            <div className="card">
                  <div className="card-img">
                        <img className='image' src={product.productImage} alt="Card image cap"/>
                  </div>
                  <div className="card-body">
                        <h4 className="card-title">{ product.title }</h4>
                        <h5>${product.price}.00</h5>
                  </div>
            </div>
      )

}

export default ProductListItems;