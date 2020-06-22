import React from "react"
import { Link } from "react-router-dom"
// import EmployeeIndexItem from "./employee_index_item"


class EmployeeEdit extends React.Component {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        this.props.fetchEmployees();
    }

    goBack(){
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <h1>Made it to the edit page.</h1>
                <button onClick={this.goBack}>Back</button>

            </>
        )
    }
}

export default EmployeeEdit;