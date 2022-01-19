import { connect } from "react-redux";
import { createProduct } from "../../actions/product_action";
import { fetchUser } from "../../actions/user_actions"; 
import ProductCreate from './product_form';

const mSTP = (state, ownProps) => {
      return ({
            loggedIn: state.session.isAuthenticated,
            userId: state.session.user.id,
            product: {
                  title: '',
                  description: '',
                  price: '',
                  user: '',
                  date: ''
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
