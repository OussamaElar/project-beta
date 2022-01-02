import {
      RECEIVE_USER_PRODUCTS,
      RECEIVE_PRODUCTS,
      RECEIVE_PRODUCT,
      REMOVE_PRODUCT
} from '../actions/product_action';

const ProductReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
      let newState = Object.assign({}, state)
      switch (action.type) {
            case RECEIVE_PRODUCTS:
                  newState.all = action.products.data;
                  return newState;
            case RECEIVE_PRODUCT:
                  newState.all = { 0: action.product.data };
                  return newState;
            case REMOVE_PRODUCT:
                  delete newState.user[action.productId];
                  return newState;
            case RECEIVE_USER_PRODUCTS:
                  newState.user = action.products.data;
                  return newState;
            default:
                  return state;
      }
}

export default ProductReducer;