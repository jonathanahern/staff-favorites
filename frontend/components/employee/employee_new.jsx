import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {
  AppProvider,
  Page,
  Stack,
  Button,
  Form,
  FormLayout,
  TextField,
} from "@shopify/polaris";

class EmployeeNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      job_title: "",
      description: "",
      profile_url: "",
      save_loading: false,
      save_disabled: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
    this.test = this.test.bind(this);
  }

  goBack() {
    this.props.history.push("/");
  }

  test() {
    // fetch(
    //   `https://junk-store-test.myshopify.com/admin/api/2020-04/pages/count.json`,
    //   {
    //     method: "GET",
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((resp) => {
    //     console.log(resp);
    //   });
  }

  handleSubmit() {
    this.setState({ save_loading: true });
    const employee = Object.assign({}, this.state);
    this.props.createEmployee(employee);
    this.props.history.push("/");
  }

  handleChange(name, value) {
    this.setState({ save_disabled: false });
    let state = this.state;
    state[name] = value;
    this.setState({ state });
  }

  render() {
    const { name } = this.props.employee;
    const { save_loading, save_disabled } = this.state;
    const title = `Add New Staff`;
    return (
      <AppProvider>
        <Page
          title={title}
          breadcrumbs={[{ content: "Back", onAction: this.goBack }]}
        >
          <Form onSubmit={this.handleSubmit}>
            <FormLayout>
              <Stack>
                <div>
                  <TextField
                    value={this.state.name}
                    onChange={this.handleChange.bind(this, "name")}
                    label="Name"
                    type="text"
                    maxLength={24}
                    fullWidth
                  />
                  <br />
                  <TextField
                    value={this.state.job_title}
                    onChange={this.handleChange.bind(this, "job_title")}
                    label="Job Title"
                    type="text"
                    maxLength={24}
                  />
                  <br />
                  <TextField
                    value={this.state.description}
                    onChange={this.handleChange.bind(this, "description")}
                    label="Description"
                    multiline={true}
                    rows={3}
                    maxLength={240}
                  />
                  <br />
                  <TextField
                    value={this.state.profile_url}
                    onChange={this.handleChange.bind(this, "profile_url")}
                    label="Profile Image URL"
                    maxLength={300}
                    helpText={
                      <span>
                        Upload images to Shopify Files (Settings/Files) and
                        paste image's URL here
                      </span>
                    }
                  />
                </div>
                <img
                  src={this.state.profile_url}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
                  }}
                  style={{ height: "320px", padding: "20px" }}
                />
              </Stack>
              <Stack>
                <Button
                  primary={true}
                  loading={save_loading}
                  disabled={save_disabled}
                  submit
                >
                  Add
                </Button>

                <Button onClick={this.test}>Test</Button>

                <Button loading={save_loading} onClick={this.goBack}>
                  Back
                </Button>
              </Stack>
            </FormLayout>
          </Form>
        </Page>
      </AppProvider>
    );
  }
}
export default EmployeeNew;
