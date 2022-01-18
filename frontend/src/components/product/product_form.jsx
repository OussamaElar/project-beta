import React, { useState } from 'react';
import './produc_create.css';


const ProductCreate = (props) => {
      return (
            <form className='create_form'>
                  <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                  </div>
                  <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Price</label>
                        <input type="number" class="form-control" id="exampleFormControlInput2" placeholder="Price"/>
                  </div>
                  <button type="submit" className="btn btn-warning">Submit</button>                  
            </form>
      )
}

export default ProductCreate;


