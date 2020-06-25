import { combineReducers } from "redux";

import EmployeesReducer from "./employee_reducer.js";

const entitiesReducer = combineReducers({
    employees: EmployeesReducer
});

export default entitiesReducer;