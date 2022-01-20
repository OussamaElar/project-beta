import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateProduct, fetchProduct } from '../../actions/product_action';
import ProductCreate from './product_form';


const EditProduct = (props) => {
      useEffect(() => {
            
      }, [])
      return (
            
      )
}

const mSTP = (state) => {
      return {
            product: state.products.all[0],
            formType: 'Update product'
      }
}

const mDTP = (dispatch) => ({
      fetchProduct: (productId) => dispatch(fetchProduct(productId)),
      submitProduct: (product) => dispatch(updateProduct(product))
})

export default withRouter(connect(mSTP, mDTP)(EditProduct))