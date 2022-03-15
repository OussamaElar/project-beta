import React, { useState } from 'react';
import './product_create.css';


const ProductCreate = (props) => {
      const [values, setValues] = useState(props.product);
      const [productImage, setProductImage] = useState(null);
      const [file, setFile] = useState(null);
      const [error, setError] = useState(null);

      const handleImage = (e) => {
            if (e.target.files[0]) {
                  console.log({ "pic": e.target.files })
                  setProductImage(e.target.files[0])
                  const reader = new FileReader();
                  reader.addEventListener('load', () => {
                        setFile(reader.result);
                  });
                  reader.readAsDataURL(e.target.files[0])
            }
      }
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

                  let product = new FormData();
                  product.append('title', values.title)
                  product.append('description', values.description)
                  product.append('price', values.price)
                  product.append('date', newdate)
                  if (productImage) {     
                        product.append('productImage', productImage)
                  }
                  product.append('user', props.userId)

                  // let product = {
                  //       title: values.title,
                  //       description: values.description,
                  //       price: values.price,
                  //       date: newdate,
                  //       productImage: productImage,
                  //       user: props.userId
                  // }
                  
                  debugger
                  props.submitProduct(product).then(() => props.history.push('/products', err => {
                        handleErrors()
                  }))
            } else {
                  let dateObj = new Date();
                  let month = dateObj.getUTCMonth() + 1; 
                  let day = dateObj.getUTCDate();
                  let year = dateObj.getUTCFullYear();
                  let newdate = year + "/" + month + "/" + day;
                  let existingProduct = {
                        id: props.product._id,
                        title: values.title,
                        description: values.description,
                        price: values.price,
                        date: newdate,
                        user: props.product.user
                  } 
                  props.submitProduct(existingProduct).then(() => props.history.push('/products', err => {
                        handleErrors()
                  }))
            }
            
      }
      return (
            <form className='create_form' onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="form-detail">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" value={values.title} onChange={handleChange('title')}/>
                  </div>
                  <div className="form-detail">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={values.description} onChange={handleChange('description')} placeholder='Description'></textarea>
                  </div>
                  <div className="form-detail">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Image</label>
                        <img className='image-prev' src={file}></img>
                        <input type="file" name="productImage" onChange={handleImage} multiple={false} />
                        <p>.jpeg, .png, .gif Max 100mb. </p>
                  </div>
                  <div className="form-detail">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                        <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="Price" value={ values.price } onChange={handleChange('price')}/>
                  </div>
                  <button type="submit" className="form-submit">Submit</button>                  
            </form>
      )
}

export default ProductCreate;


