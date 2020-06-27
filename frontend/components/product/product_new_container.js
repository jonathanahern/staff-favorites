import { connect } from "react-redux";
import ProductNew from "./product_new";
import { createProduct } from "../../actions/product_actions";

const mapStateToProps = (state) => ({
  product: {
    name: "",
    job_title: "",
    desciption: "",
    profile_url: "",
    shop_id: "",
  },
});

const mapDispatchToProps = (dispatch) => ({
  createProduct: (product) => dispatch(createProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductNew);
