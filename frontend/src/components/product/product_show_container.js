import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteProduct, fetchProducts } from "../../actions/product_action";
import ProductShow from './product_show';



const mSTP = (state, ownProps) => {
      
      return {
            product: Object.values(state.products.all).filter(ele => ele._id === ownProps.match.params.productId),
            userId: state.session.user.id
      }
}

const mDTP = (dispatch) => {
      return {
            fetchProduct: (productId) => dispatch(fetchProducts(productId)),
            deleteProduct: (productId) => dispatch(deleteProduct(productId))
      }
}

export default withRouter(connect(mSTP, mDTP)(ProductShow));