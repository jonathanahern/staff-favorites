
import React from "react";
import { Link } from "react-router-dom";
import {
  AppProvider,
  Page,
  TextStyle,
  Card,
  ResourceList,
  Button
} from "@shopify/polaris";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderProduct = this.renderProduct.bind(this);
  }

  componentDidMount() {
    this.props.fetchEmployees();
    this.props.fetchProducts();
  }

  renderProduct(product) {
    const {
      id,
      shopify_title,
      shopify_image_url,
      review,
      employee_id,
    } = product;
    let name = "Employee";
    const { employees } = this.props;
    if (Object.keys(employees).length > 0) {
        name = this.props.entities[0][employee_id].name;
    }
    let title = `${name}'s ${shopify_title} review:`;

    return (
      <Link to={`/products/${id}/edit`}>
      <ResourceList.Item
        id={id}
        accessibilityLabel={`details for ${shopify_title} `}
      >
        <div id="div-container">
          <img src={shopify_image_url} style={{ width: "60px" }} />
          <div id="description-list">
            <TextStyle variation="strong">{title}</TextStyle>
            <TextStyle> {review} </TextStyle>
          </div>
        </div>
      </ResourceList.Item>
        </Link>
        
    );
  }

  render() {
    const { products } = this.props;
    
    let noProducts = <><TextStyle variation="subdued">Loading</TextStyle> <br /> <br /></>;
    if (this.props.products.length > 0) {
      noProducts = <TextStyle></TextStyle>;
    } else if (this.props.products.length === 0) {
      noProducts = <><TextStyle variation="subdued">You do not have any picks entered currently.</TextStyle> <br /> <br /></>;
    }
    return (
      <AppProvider
        i18n={{
          Polaris: {
            ResourceList: {
              sortingLabel: "Sort by",
              defaultItemSingular: "pick",
              defaultItemPlural: "picks",
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
        <br/><br/>
        <Page title="Picks">
          {noProducts}
          <Card>
            <ResourceList
              showHeader
              items={products}
              renderItem={this.renderProduct}
            ></ResourceList>
          </Card>
          <br />
          <Link to="/products/new">
            <Button primary>Add New Pick</Button>
          </Link>
        </Page>
      </AppProvider>
    );
  }
}

export default ProductIndex;