import { connect } from "react-redux";
import ProductNew from "./product_new";
import { createProduct } from "../../actions/product_actions";
import { fetchEmployees } from "../../actions/employee_actions";

const mapStateToProps = (state) => ({
  product: {
    name: "",
    job_title: "",
    desciption: "",
    profile_url: "",
    shop_id: "",
  },
  employees: Object.values(state.entities.employees),
});

const mapDispatchToProps = (dispatch) => ({
  createProduct: (product) => dispatch(createProduct(product)),
  fetchEmployees: () => dispatch(fetchEmployees()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductNew);
