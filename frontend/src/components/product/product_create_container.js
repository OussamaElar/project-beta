import { connect } from "react-redux";
import { createProduct } from "../../actions/product_action";
import { fetchUser } from "../../actions/user_actions"; 
import ProductCreate from './product_create';

const mSTP = (state, ownProps) => {
      return ({
            loggedIn: state.session.isAuthenticated,
            newProduct: state.artwork
      })
}
