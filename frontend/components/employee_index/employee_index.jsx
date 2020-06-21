import React from "react"
import EmployeeIndexItem from "./employee_index_item"


class EmployeeIndex extends React.Component {

    componentDidMount() {
        this.props.fetchEmployees();
    }

    render() {
        return (
            <>
                <h1>Made it here by some miracle. Take a break.</h1>
            </>
        )
    }
}

export default EmployeeIndex;