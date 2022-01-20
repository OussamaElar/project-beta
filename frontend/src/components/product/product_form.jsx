import React, { useState } from 'react';
import './produc_create.css';


const ProductCreate = (props) => {
      const [values, setValues] = useState(props.product);
      const [error, setError] = useState(null);
      const handleChange = (field) => {
            return e => {
                  e.persist();
                  setValues((values) => ({
                        ...values,
                        [field]: e.target.value
                  }))
            }
      }
      const handleErrors = () => {
            setError(<p className="errors">Something went wrong, please make sure to fill all fields!</p>)
            return error    
      }
      const handleSubmit = (e) => {
            e.preventDefault();
            if (props.formType === 'Create Product') {
                  let dateObj = new Date();
                  let month = dateObj.getUTCMonth() + 1; 
                  let day = dateObj.getUTCDate();
                  let year = dateObj.getUTCFullYear();
                  let newdate = year + "/" + month + "/" + day;
                  let product = {
                        title: values.title,
                        description: values.description,
                        price: values.price,
                        date: newdate,
                        user: props.userId
                  }
                  
                  debugger
                  props.submitProduct(product).then(() => props.history.push('./products', err => {
                        handleErrors()
                  }))
            } else {
                  let dateObj = new Date();
                  let month = dateObj.getUTCMonth() + 1; 
                  let day = dateObj.getUTCDate();
                  let year = dateObj.getUTCFullYear();
                  let newdate = year + "/" + month + "/" + day;
                  let existingProduct = {
                        id: props._id,
                        title: values.title,
                        description: values.description,
                        price: values.price,
                        date: newdate,
                        user: props.userId
                  } 
                  props.submitProduct(existingProduct).then(() => props.history.push('./products', err => {
                        handleErrors()
                  }))
            }
            
      }
      return (
            <form className='create_form' onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" value={values.title} onChange={handleChange('title')}/>
                  </div>
                  <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={values.description} onChange={handleChange('description')}></textarea>
                  </div>
                  <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Price" value={ values.price } onChange={handleChange('price')}/>
                  </div>
                  <button type="submit" className="btn btn-warning">Submit</button>                  
            </form>
      )
}

export default ProductCreate;


