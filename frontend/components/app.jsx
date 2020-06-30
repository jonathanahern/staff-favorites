import React from "react";
import { Route } from "react-router-dom";
import EmployeeIndexContainer from "./employee/employee_index_container";
import EmployeeNewContainer from "./employee/employee_new_container";
import EmployeeEditContainer from "./employee/employee_edit_container";
import ProductIndexContainer from "./product/product_index_container"
import ProductNewContainer from "./product/product_new_container"
import ProductEditContainer from "./product/product_edit_container";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <>
    <Route exact path="/" component={EmployeeIndexContainer} />
    <Route exact path="/" component={ProductIndexContainer} />
    <Route exact path="/employee/new" component={EmployeeNewContainer} />
    <Route path="/employees/:employeeId/edit" component={EmployeeEditContainer} />
    <Route exact path="/products/new" component={ProductNewContainer} />
    <Route path="/products/:productId/edit" component={ProductEditContainer} />
    
    {/* <AuthRoute exact path="/" component={Splash} /> */}
  </>
);

export default App;