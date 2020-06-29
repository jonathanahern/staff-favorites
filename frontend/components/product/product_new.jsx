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
  Card,
  TextField,
  ResourcePicker,
  DisplayText,
  TextStyle,
  Select,
} from "@shopify/polaris";

class ProductNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopify_title: "",
      shopify_image_url: "",
      shopify_product_id: "",
      review: "",
      employee_id: null,
      pickerOpen: false,
      selectedEmployee: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openPicker = this.openPicker.bind(this);
    this.closePicker = this.closePicker.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.createNewReview = this.createNewReview.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  closePicker() {
    this.setState({ pickerOpen: false });
  }

  openPicker() {
    this.setState({ pickerOpen: true });
  }

  componentDidMount() {
    this.props.fetchEmployees();
  }

  goBack() {
    this.props.history.push("/");
  }

  handleSelection(selection) {
    this.closePicker();
    let imageUrl = selection.selection[0].images[0].originalSrc;
    let title = selection.selection[0].title;
    let idArr = selection.selection[0].id.split("Product/");
    let id = parseInt(idArr[idArr.length - 1]);
    this.setState({
      shopify_title: title,
      shopify_image_url: imageUrl,
      shopify_product_id: id,
    });
  }

  createNewReview() {
    console.log("created!");
  }

  handleSubmit() {
    // this.setState({ save_loading: true });
    // let product = {
    //   name: this.state.name,
    //   job_title: this.state.job_title,
    //   description: this.state.description,
    //   profile_url: this.state.profile_url,
    // };
    const product = Object.assign({}, this.state);
    this.props.createProduct(product);
    this.props.history.push("/");
  }

  handleChange(name, value) {
    let state = this.state;
    state[name] = value;
    this.setState({ state });
  }

  handleSelectChange(e) {
    let arr = e.split("&");
    console.log(arr);
    this.setState({"selectedEmployee": e})
    this.setState({"employee_id": parseInt(arr[1])})
    console.log(this.state);
  }

  render() {
    // const { save_loading, save_disabled } = this.state;
    const title = `Add New Pick`;
    let productInfo = "";
    if (this.state.shopify_title.length < 1) {
      productInfo = <p>No product selected</p>;
    } else {
      productInfo = (
        <Stack vertical>
          <TextStyle variation="strong">{this.state.shopify_title}</TextStyle>
          <img src={this.state.shopify_image_url} alt="" height="100px" />
        </Stack>
      );
    }
    let options = [];
    if (this.props.employees.length > 0) {
      this.props.employees.forEach(employee => {
          let val = `${employee.name}&${employee.id}`
          let newObj = { label:employee.name, value:val }
          options.push(newObj);
      });
    }
    return (
      <AppProvider
        apiKey="a959533e684cfdd1e15084c979598b36"
        shopOrigin="junk-store-test.myshopify.com"
      >
        <Page>
          <Link to="/">
            <p id="back-link">
              <svg height="20" width="20">
                <path
                  d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16"
                  fillRule="evenodd"
                ></path>
              </svg>
              Back
            </p>
          </Link>
          <br />
          <DisplayText size="large" element="h1">
            Add New Pick
          </DisplayText>
          <br />
          <Form onSubmit={this.handleSubmit}>
            <FormLayout>
              <Card
                title="Step One: Select Product"
                sectioned
                primaryFooterAction={{
                  content: "Find Product",
                  onAction: this.openPicker,
                }}
              >
                {productInfo}
              </Card>
              <Card title="Step Two: Select Staff Member" sectioned>
                <Select
                  label="Staff Members"
                  placeholder={"Select a staff member"}
                  options={options}
                  onChange={this.handleSelectChange}
                  value={this.state.selectedEmployee}
                />
              </Card>
              <Card title="Step Three: Write Review" sectioned>
                <TextField
                  value={this.state.review}
                  onChange={this.handleChange.bind(this, "review")}
                  multiline={true}
                  rows={4}
                  maxLength={400}
                  showCharacterCount={true}
                />
              </Card>
            </FormLayout>
          </Form>
        </Page>
        <ResourcePicker
          resourceType="Product"
          open={this.state.pickerOpen}
          showVariants={false}
          allowMultiple={false}
          onSelection={this.handleSelection}
          onCancel={this.closePicker}
        />
      </AppProvider>
    );
  }
}
export default ProductNew;
