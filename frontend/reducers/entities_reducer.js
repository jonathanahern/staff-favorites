import { combineReducers } from "redux";

import employeesReducer from "./employee_reducer.js";

const entitiesReducer = combineReducers({
    employees: employeesReducer
});

export default entitiesReducer;