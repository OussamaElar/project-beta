import { connect } from "react-redux";
import { createProduct } from "../../actions/product_action";
import { fetchUser } from "../../actions/user_actions"; 
import ProductCreate from './product_create';

const mSTP = (state, ownProps) => {
      return ({
            loggedIn: state.session.isAuthenticated,
            userId: state.session.user.userId,
            product: {
                  title: '',
                  description: '',
                  price: '',
                  user: '',
            },
            formType: 'Create Product'
      })
};


const mDTP = dispatch => {
      return {
            submitProduct: (product) => dispatch(createProduct(product)),
            fetchUser: userId => dispatch(fetchUser(userId))
      }
}

export default connect(mSTP, mDTP)(ProductCreate);
