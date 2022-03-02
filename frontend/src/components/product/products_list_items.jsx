import React from 'react'
import { Link } from 'react-router-dom';


const ProductListItems = (props) => {
      const { product } = props 
      
      return (
            <div>
                  <p>{product.title}</p>
                  <div className="card" style={{ "width": "18rem" }}>
                        <Link to={`/products/${product._id}`}><img className="card-img-top" src="..." alt="Card image cap"/></Link>
                        <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" className="btn btn-primary">Go somewhere</a>
                              
                        </div>
                  </div>
            </div>
      )
}

export default ProductListItems;