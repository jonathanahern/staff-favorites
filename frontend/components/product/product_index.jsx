
import React from "react";
import { Link } from "react-router-dom";
import {
  AppProvider,
  Page,
  Stack,
  TextStyle,
  Card,
  ResourceList,
  Button
} from "@shopify/polaris";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProduct(product) {
    const {
      id,
      shopify_title,
      shopify_image_url,
      shopify_product_id,
      review,
      employee_id,
    } = product;
    let title = `Jonathan's ${shopify_title} review:`;

    return (
      //   <Link to={`/products/${id}/edit`}>
      <ResourceList.Item
        id={id}
        // url={'/product/edit'}
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
      //   </Link>
        
    );
  }

  render() {
    const { products } = this.props;

    return (
      <AppProvider
        i18n={{
          Polaris: {
            ResourceList: {
              sortingLabel: "Sort by",
              defaultItemSingular: "review",
              defaultItemPlural: "reviews",
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
        <Page title="Product Reviews">
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