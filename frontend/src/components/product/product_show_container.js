import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteProduct, fetchProduct } from "../../actions/product_action";
import ProductShow from './product_show';



const mSTP = (state, ownProps) => {
      return {
            product: Object.values(state.products.all)[0],
            // userId: state.session.user.id
      }
}

const mDTP = (dispatch) => {
      return {
            fetchProduct: (productId) => dispatch(fetchProduct(productId)),
            deleteProduct: (productId) => dispatch(deleteProduct(productId)),
      }
}

export default withRouter(connect(mSTP, mDTP)(ProductShow));