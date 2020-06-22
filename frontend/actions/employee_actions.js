import * as APIUtil from "../util/employee_api_util";

export const RECEIVE_EMPLOYEES = "RECEIVE_EMPLOYEES";
export const RECEIVE_EMPLOYEE = 'RECEIVE_EMPLOYEE';

const receiveEmployees = employees => {
    return {
        type: RECEIVE_EMPLOYEES,
        employees
    }
};

const receiveEmployee = employee => ({
    type: RECEIVE_EMPLOYEE,
    employee
});

export const fetchEmployees = () => dispatch =>
    APIUtil.fetchEmployees().then(
        employees => dispatch(receiveEmployees(employees))
    );

export const updateEmployee = employee => dispatch => (
    ApiUtil.updateEmployee(employee)
        .then(employee => dispatch(receiveEmployee(employee)))
);
