import React from 'react';
import { fetchUser, updateUserInfo } from '../../actions/user_actions';
import { getUserProducts, fetchProduct, updateProduct, deleteProduct, createProduct } from '../../actions/product_action';
import { connect } from 'react-redux';
import Profile from './profile';



const mSTP = (state) => {
      return {
            currentUser: state.session.user,
            user: state.users.user,
            products: Object.values(state.products.user)
      }      
}

const mDTP = (dispatch) => {
      return {
            fetchUser: userId => dispatch(fetchUser(userId)),
            fetchUserProducts: userId => dispatch(getUserProducts(userId)),
            updateUserInfo: user => dispatch(updateUserInfo(user)),
            fetchProduct: productId => dispatch(fetchProduct(productId)),
            updateProduct: product => dispatch(updateProduct(product)),
            deleteProduct: productId => dispatch(deleteProduct(productId)),
            createProduct: product => dispatch(createProduct(product))
      }
}

export default connect(mSTP, mDTP)(Profile);