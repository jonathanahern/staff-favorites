import {
    RECEIVE_EMPLOYEES
} from '../actions/employee_actions';

const employeesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_EMPLOYEES:
            return Object.assign({}, state, action.employees);
        default:
            return state;
    }
};

export default employeesReducer;