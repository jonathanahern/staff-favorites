import React from "react"
import {Link} from "react-router-dom"
import { AppProvider , Page , Stack , TextStyle , Card , ResourceList, Button }
from '@shopify/polaris' ;
// import EmployeeIndexItem from "./employee_index_item"


class EmployeeIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchEmployees();
        console.log(this.props);
    }

    renderStaff(staff) {
        const { id, name, job_title, description, profile_url } = staff;
        let title = null;
        if (job_title.length > 0) {
            title = ` - ${job_title}`
        } else {
            title = ``
        }

        return (
            <ResourceList.Item id={id} accessibilityLabel={`details for ${name} `}>
                    <div id="div-container">
                        <img src={profile_url} style={{ width: "60px" }} />
                        <div id="description-list">
                            <TextStyle variation="strong">
                                {" "}
                                {name}
                                <span id="job-title-list">{title}</span>{" "}
                            </TextStyle>
                            <TextStyle> {description} </TextStyle>
                        </div>
                    </div>
            </ResourceList.Item>
        );
    };

    render() {
        const { employees } = this.props;
        return (
            <AppProvider
                i18n={{
                    Polaris: {
                        ResourceList: {
                            sortingLabel: "Sort by",
                            defaultItemSingular: "staff",
                            defaultItemPlural: "staff",
                            showing: "Showing {itemsCount} {resource}",
                            Item: {
                                viewItem: "View details for {itemName}",
                            },
                        },
                        Common: {
                            checkbox: "checkbox",
                        },
                    },
                }}
            >
                <Page title="Staff">
                    <Card>
                        {/* <h1>{employees}</h1> */}
                        <ResourceList
                            showHeader
                            items={employees}
                            renderItem={this.renderStaff}
                        ></ResourceList>
                    </Card>
                    <br />
                    <Button primary onClick={() => this.addStaff()}>
                        Add Staff
                    </Button>

                </Page>
            </AppProvider>
        );
    }
}

export default EmployeeIndex;