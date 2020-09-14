import * as APIUtil from "../util/setting_api_util";

// export const RECEIVE_EMPLOYEES = "RECEIVE_EMPLOYEES";
export const RECEIVE_SETTING = "RECEIVE_SETTING";
// export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";
// export const RECEIVE_EMPLOYEE_ERRORS = 'RECEIVE_EMPLOYEE_ERRORS';

// const receiveEmployees = employees => {
//     return {
//         type: RECEIVE_EMPLOYEES,
//         employees
//     }
// };

const receiveSetting = (setting) => ({
  type: RECEIVE_SETTING,
  setting,
});

// const receiveEmployeeUpdate = (employee) => ({
//   type: RECEIVE_EMPLOYEE,
//   employee,
// });

// const removeEmployee = (employeeId) => ({
//   type: REMOVE_EMPLOYEE,
//   employeeId,
// });

// export const fetchEmployees = () => dispatch =>
//     APIUtil.fetchEmployees().then(
//         employees => dispatch(receiveEmployees(employees))
//     );

export const fetchSetting = (shopId) => (dispatch) =>
  APIUtil.fetchSetting(shopId).then((setting) =>
    dispatch(receiveSetting(setting))
  );

export const updateSetting = (setting) => (dispatch) =>
  APIUtil.updateSetting(setting).then((setting) =>
    dispatch(receiveSetting(setting))
  );

// export const updateSetting = setting => dispatch => (
//   APIUtil.updateSetting(setting).then(setting => {
//     if (!('error' in setting)) {
//       dispatch(receiveSetting(setting));
//     }
//     return setting;
//   })
// );

// export const createEmployee = (employee) => (dispatch) =>
//          APIUtil.createEmployee(employee).then((employee) =>
//            dispatch(receiveEmployee(employee))
//          ).fail

// export const createEmployee = employee => dispatch => (
//   APIUtil.createEmployee(employee).then(employee => {
//     if (!('error' in employee)){
//       dispatch(receiveEmployee(employee));
//     }
//     return employee;
//   })
// );

// export const deleteEmployee = (employeeId) => (dispatch) =>
//          APIUtil.deleteEmployee(employeeId).then(() =>
//            dispatch(removeEmployee(employeeId))
//          );

// export const receiveEmployeeErrors = errors => ({
//   type: RECEIVE_EMPLOYEE_ERRORS,
//   errors
// });