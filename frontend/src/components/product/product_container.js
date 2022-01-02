import { connect } from "react-redux";
import { deleteProduct, fetchProducts } from "../../actions/product_action";
import Products from './products';



const mSTP = (state) => {
      return {
            products: Object.values(state.products.all),
            userId: state.session.user.id
      }
}

const mDTP = (dispatch) => {
      return {
            fetchProducts: () => dispatch(fetchProducts()),
            deleteProduct: (productId) => dispatch(deleteProduct(productId))
      }
}

export default connect(mSTP, mDTP)(Products);