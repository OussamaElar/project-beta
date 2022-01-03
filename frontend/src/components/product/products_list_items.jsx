import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ProductListItems = (props) => {
      const { product } = props 
      
      return (
            <div>
                  <p>{product.title}</p>
                  <div className="card" style={{ "width": "18rem" }}>
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" className="btn btn-primary">Go somewhere</a>
                              <Button variant="primary">Go somewhere</Button>
                        </div>
                  </div>
            </div>
      )
}

export default ProductListItems;