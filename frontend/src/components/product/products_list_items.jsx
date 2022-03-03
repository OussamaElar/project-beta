import React from 'react'
import { Link } from 'react-router-dom';


const ProductListItems = (props) => {
      const { product } = props 
      
      return (
            
                  <div className="card">
                        <div className="card-img">
                              <Link to={`/products/${product._id}`}><img  src="..." alt="Card image cap"/></Link>
                        </div>
                        <div className="card-body">
                              <h4 className="card-title">{product.title}</h4>
                              <h5>{ product.price}.00$</h5>
                        </div>
                  </div>
            
      )
}

export default ProductListItems;