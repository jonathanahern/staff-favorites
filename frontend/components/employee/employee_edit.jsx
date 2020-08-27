import React from "react"
import {
  AppProvider,
  Page,
  Stack,
  Button,
  Modal,
  Form,
  FormLayout,
  TextField,
  TextContainer
} from "@shopify/polaris";


class EmployeeEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.employee.name,
      job_title: this.props.employee.job_title,
      description: this.props.employee.description,
      profile_url: this.props.employee.profile_url,
      save_loading: false,
      save_disabled: true,
      deleting: false,
      delete_loading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.props.fetchEmployee(this.props.employee.id);
  }

  handleChange(name, value) {
    this.setState({ save_disabled: false });
    let state = this.state;
    state[name] = value;
    this.setState({ state });
  }

  goBack() {
    this.props.history.push("/");
  }

  closeModal() {
    this.setState({ deleting: false });
  }

  openModal() {
    this.setState({ deleting: true });
  }

  deleteEmployee() {
    this.closeModal();
    this.setState({ save_loading: true });
    this.setState({ delete_loading: true });
    this.props.deleteEmployee(this.props.employee.id).then(data => this.props.history.push("/"));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ save_loading: true });
    this.setState({ delete_loading: true });
    let employeeUpdated = {
      id: this.props.employee.id,
      name: this.state.name,
      job_title: this.state.job_title,
      description: this.state.description,
      profile_url: this.state.profile_url,
    };
    this.props.updateEmployee(employeeUpdated).then(data => this.props.history.push("/"));
  }

  render() {
    let name = '';

    if (this.props.employee !== undefined) {
      name = this.props.employee.name;
    }
    
    const {
      deleting,
      save_loading,
      save_disabled,
      delete_loading,
    } = this.state;
    const title = `${name}'s Profile`;
    const delete_question = `Are you sure you want to delete ${name}?`;
    const delete_subtitle = `Doing so will delete their page and all of their pick reviews. This cannot be undone.`
    return (
      <AppProvider>
        <br/><br/>
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
                    multiline={6}
                    maxLength={500}
                    showCharacterCount={true}
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
                  Save
                </Button>
                <Button
                  destructive={true}
                  onClick={() => this.openModal()}
                  loading={delete_loading}
                >
                  Delete
                </Button>
              </Stack>
            </FormLayout>
          </Form>
          <Modal
            open={deleting}
            onClose={this.closeModal}
            title={delete_question}
          >
            <Modal.Section>
              <TextContainer>
                <p>
                  {delete_subtitle}
                </p>
              </TextContainer>
              <br/><hr/><br/>
              <Stack>
                <Button onClick={() => this.closeModal()}>Cancel</Button>
                <Button
                  destructive={true}
                  onClick={() => this.deleteEmployee()}
                >
                  Delete
                </Button>
              </Stack>
            </Modal.Section>
          </Modal>
        </Page>
      </AppProvider>
    );
  }
}

export default EmployeeEdit;