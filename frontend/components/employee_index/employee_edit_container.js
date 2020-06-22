import { connect } from 'react-redux';
import { fetchEmployees } from '../../actions/employee_actions';
import EmployeeEdit from './employee_edit';

const mapStateToProps = state => ({
    employees: Object.values(state.entities.employees)
});

const mapDispatchToProps = dispatch => ({
    fetchEmployees: () => dispatch(fetchEmployees())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeEdit);