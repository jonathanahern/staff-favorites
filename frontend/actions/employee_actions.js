import * as APIUtil from "../util/employee_api_util";

export const RECEIVE_EMPLOYEES = "RECEIVE_EMPLOYEES";

const receiveEmployees = employees => {
    return {
        type: RECEIVE_EMPLOYEES,
        employees
    }
};

export const fetchEmployees = () => dispatch =>
    APIUtil.fetchEmployees().then(
        employees => dispatch(receiveEmployees(employees))
    );
