import { combineReducers } from "redux";
import session from './session_reducer';
import errors from './errors_reducer'
import products from './product_reducer'
import users from './user_reducer'

const RootReducer = combineReducers({
      session,
      errors,
      products,
      users,
})

export default RootReducer;