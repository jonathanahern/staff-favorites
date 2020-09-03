import { connect } from 'react-redux';
import { fetchProduct, deleteProduct, updateProduct } from '../../actions/product_actions';
import { fetchEmployees } from '../../actions/employee_actions';

import ProductEdit from './product_edit';

const mapStateToProps = (state, ownProps) => ({
  data: document.getElementById("shopify-app-init"),
  product: state.entities.products[ownProps.match.params.productId],
  employees: Object.values(state.entities.employees),
});

const mapDispatchToProps = (dispatch) => ({
  fetchEmployees: () => dispatch(fetchEmployees()),
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  updateProduct: (product) => dispatch(updateProduct(product)),
  deleteProduct: (productId) => dispatch(deleteProduct(productId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductEdit);