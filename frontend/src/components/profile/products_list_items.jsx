import React from 'react';
import { Link } from 'react-router-dom';


const ProductListItems = (props) => {
      const { product, deleteProduct } = props;
      
      
      const handleDelete = (e) => {
            deleteProduct(product._id).then(() => window.location.reload())
            
      }
      return (
            <div className="card">
                  <div className="card-img">
                        <img className='image' src={product.productImage} alt="Card image cap"/>
                  </div>
                  <div className="card-body">
                        <h4 className="card-title">{ product.title }</h4>
                        <h5>${product.price}.00</h5>
                  </div>
                  <div className='card-button'>
                        <button type='submit' onClick={handleDelete}>Delete Listing</button>
                        <button><Link to=''>Update Listing</Link></button>
                  </div>
            </div>
      )

}

export default ProductListItems;