import React from "react"
import {Link} from "react-router-dom"
// import EmployeeIndexItem from "./employee_index_item"


class EmployeeIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("got here")
        this.props.fetchEmployees();
    }

    render() {
        return (
            <>
                <h1>Made it here by some miracle. Take a break.</h1>
                <Link to="/employee/edit" id="">
                    Something else
                </Link>
            </>
        )
    }
}

export default EmployeeIndex;