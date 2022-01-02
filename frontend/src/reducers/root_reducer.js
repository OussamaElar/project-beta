import { combineReducers } from "redux";
import session from './session_reducer';
import errors from './errors_reducer'
import products from './product_reducer'

const RootReducer = combineReducers({
      session,
      errors,
      products
})

export default RootReducer;