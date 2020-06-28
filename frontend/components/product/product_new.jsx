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
} from "@shopify/polaris";

class ProductNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopify_title: "",
      shopify_image_url: "",
      shopify_product_id: "",
      review: "",
      employee_id: false,
      pickerOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openPicker = this.openPicker.bind(this);
    this.closePicker = this.closePicker.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.createNewReview = this.createNewReview.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  closePicker() {
    this.setState({ pickerOpen: false });
  }

  openPicker() {
      
    this.setState({ pickerOpen: true });
    console.log(this.state.pickerOpen);
  }

  goBack() {
    this.props.history.push("/");
  }

  handleSelection(selection) {
    this.closePicker();
    console.log(selection);
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
    // this.setState({ save_disabled: false });
    let state = this.state;
    state[name] = value;
    this.setState({ state });
  }

  render() {
    // const { save_loading, save_disabled } = this.state;
    const title = `Add New Pick`;
    return (
      <AppProvider
        apiKey="a959533e684cfdd1e15084c979598b36"
        shopOrigin="junk-store-test.myshopify.com"
      >
        <Page>
          <Link to="/">
            <p id="back-link">
              <span>
                M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1
                0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293
                4.293A.999.999 0 0 1 12 16
              </span>
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
                <p>View a summary of your online store’s performance.</p>
              </Card>
              <Card title="Online store dashboard" sectioned>
                <p>View a summary of your online store’s performance.</p>
              </Card>
              <Card title="Online store dashboard" sectioned>
                <p>View a summary of your online store’s performance.</p>
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
