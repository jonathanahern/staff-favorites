import { combineReducers } from "redux";

import EmployeesReducer from "./employee_reducer.js";
import ProductsReducer from "./product_reducer"

const entitiesReducer = combineReducers({
    employees: EmployeesReducer,
    products: ProductsReducer
});

export default entitiesReducer;