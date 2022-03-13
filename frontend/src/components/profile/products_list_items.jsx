import { Discovery } from 'aws-sdk';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ProductListItems = (props) => {
      const { product, deleteProduct } = props;
      const [modalStyle, setModalStyle] = useState('hide');
      
      const handleModal = (e) => {
            let body = document.querySelector('body');
            if (modalStyle === 'hide') {
                  setModalStyle('show');
                  body.classList.add('is-blurred');
            } else {
                  setModalStyle('hide');
                  body.classList.remove('is-blurred');
            }
      }

      const cancelDelete = (e) => {
            let body = document.querySelector('body');
            if (modalStyle === 'show') {
                  setModalStyle('hide');
                  body.classList.remove('is-blurred');
            }
      }

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
                        <button type='submit' onClick={handleModal}>Delete Listing</button>
                        <button><Link to=''>Update Listing</Link></button>
                  </div>
                  <div className={modalStyle + ' modal'}>
                        <p>Are you sure you want to delete this item</p>
                        <button  onClick={cancelDelete}>Cancel</button>
                        <button  onClick={handleDelete}>Confirm</button>
                  </div>
            </div>
      )

}

export default ProductListItems;