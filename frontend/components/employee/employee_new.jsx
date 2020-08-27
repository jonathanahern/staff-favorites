import React, { Component } from "react";
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
      valid_img: false,
      name_error: "",
      description_error: "",
      img_error: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkForErrors = this.checkForErrors.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.push("/staff");
  }

  checkForErrors(){
    if (this.state.name.length < 1) {
      this.setState({ name_error: "Name is required" });
      return true;
    } else if (this.state.description.length < 5){
      this.setState({ description_error: "Description must be at least 5 characters" });
      return true;
    } else if (this.state.valid_img === false) {
      this.setState({ description_error: "Valid image url is required" });
      return true;
    } else {
      return false;
    }
  }

  handleSubmit() {
    if (this.checkForErrors() === false){
      this.setState({ save_loading: true });
      const employee = Object.assign({}, this.state);
      this.props.createEmployee(employee).then(data => this.props.history.push("/staff"));
    }
  }

  handleChange(name, value) {
    if (name === "name" && this.state.name_error.length > 0){
      this.setState({ name_error: "" })
    } else if (name === "description" && this.state.description_error.length > 0) {
      this.setState({ description_error: "" })
    }
    this.setState({ save_disabled: false });
    let state = this.state;
    state[name] = value;
    this.setState({ state });
  }

  render() {
    const { save_loading, save_disabled } = this.state;
    const title = `Add New Staff`;
    return (
      <AppProvider>
        <br /><br />
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
                    error={this.state.name_error}
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
                    multiline={6}
                    maxLength={500}
                    showCharacterCount={true}
                    error={this.state.description_error}
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
