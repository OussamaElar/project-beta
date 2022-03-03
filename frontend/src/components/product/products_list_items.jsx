import React from 'react'
import { Link } from 'react-router-dom';


const ProductListItems = (props) => {
      const { product } = props 
      
      return (
            
                  <div className="card">
                        <Link to={`/products/${product._id}`}><img className="card-img" src="..." alt="Card image cap"/></Link>
                        <div className="card-body">
                              <h5 className="card-title">{product.title}</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <button className="btn">Go somewhere</button>
                              
                        </div>
                  </div>
            
      )
}

export default ProductListItems;