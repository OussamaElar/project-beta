import React, { useState } from 'react';
import './produc_create.css';


const ProductCreate = (props) => {
      const [values, setValues] = useState(props.product);
      const handleChange = (field) => {
            return e => {
                  e.persist();
                  setValues((values) => ({
                        ...values,
                        [field]: e.target.value
                  }))
            }
      }
      return (
            <form className='create_form'>
                  <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={values.title}/>
                  </div>
                  <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={values.description}></textarea>
                  </div>
                  <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Price</label>
                        <input type="number" class="form-control" id="exampleFormControlInput2" placeholder="Price" value={ values.price }/>
                  </div>
                  <button type="submit" className="btn btn-warning">Submit</button>                  
            </form>
      )
}

export default ProductCreate;


