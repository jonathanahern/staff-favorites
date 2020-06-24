import React from "react"
import {Link} from "react-router-dom"
import { AppProvider , Page , Stack , TextStyle , Card , ResourceList, Button }
from '@shopify/polaris' ;


class EmployeeIndex extends React.Component {

    constructor(props) {
        super(props);
        this.addStaff = this.addStaff.bind(this);
    }

    componentDidMount() {
        this.props.fetchEmployees();
        console.log(this.props);
    }

    addStaff(){
        redirect
        console.log("Add them")
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
          <Link to={`/employees/${id}/edit`}>
            <ResourceList.Item
              id={id}
              // url={'/employee/edit'}
              accessibilityLabel={`details for ${name} `}
            >
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
          </Link>
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
                <ResourceList
                  showHeader
                  items={employees}
                  renderItem={this.renderStaff}
                ></ResourceList>
              </Card>
              <br />
              <Link to="/employee/new">
                <Button primary>Add Staff</Button>
              </Link>
            </Page>
          </AppProvider>
        );
    }
}

export default EmployeeIndex;