import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateProduct, fetchProduct } from '../../actions/product_action';
import ProductCreate from './product_form';

// finish first the product show and add button for update product
const EditProduct = (props) => {
      useEffect(() => {
            props.fetchProduct(props.match.params.productId)
      }, [])
      if (!props.product) return null
      return (
            <ProductCreate {...props}/>
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