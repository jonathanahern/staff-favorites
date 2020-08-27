import React from "react"
import {Link} from "react-router-dom"
import { AppProvider , Page , Stack , TextStyle , Card , ResourceList, Button }
from '@shopify/polaris' ;


class EmployeeIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchEmployees();
    }

    renderStaff(staff) {
        const { id, name, job_title, description, profile_url } = staff;
        let title = null;
        let descriptionEdit = description;
        if (description.length > 240) {
          descriptionEdit = description.substr(0, 220) + "...";
        }
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
                  <TextStyle> {descriptionEdit} </TextStyle>
                </div>
              </div>
            </ResourceList.Item>
          </Link>
        );
    };

    render() {
        const { employees } = this.props;
        let noStaff = <><TextStyle variation="subdued">Loading</TextStyle> <br/> <br/></>;
        if (this.props.employees.length > 0){
          noStaff = <TextStyle></TextStyle>;
        } else if (this.props.employees.length === 0){
          noStaff = <><TextStyle variation="subdued">You do not have any staff entered currently. Add staff before entering picks.</TextStyle> <br /> <br /></>;
        }

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
            <br /><br />
            <Page title="Staff">
              {noStaff}
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