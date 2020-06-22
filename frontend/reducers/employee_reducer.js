import {
    RECEIVE_EMPLOYEES, RECEIVE_EMPLOYEE
} from '../actions/employee_actions';

const employeesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_EMPLOYEES:
            return Object.assign({}, state, action.employees);
        case RECEIVE_EMPLOYEE:
            return Object.assign({}, oldState, { [action.employee.id]: action.employee });
        default:
            return state;
    }
};

export default employeesReducer;