import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  AppProvider,
  Page,
  ChoiceList,
  Stack,
  RadioButton,
  Button,
  Form,
  FormLayout,
  Card,
  TextField,
  DisplayText,
  TextStyle,
  Select,
} from "@shopify/polaris";

import { Provider as AppBridgeProvider, ResourcePicker } from "@shopify/app-bridge-react";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stickerURL: "https://i.ibb.co/3kW5XsV/red-burst.png",
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStickerChange = this.handleStickerChange.bind(this);
  }

  handleStickerChange(checked, newVal, test) {
    console.log(newVal);
    this.setState({ stickerURL: newVal });
  }

  render() {
    let selected = this.state.stickerURL;
    const red = <img src="https://i.ibb.co/3kW5XsV/red-burst.png" alt="Price Vectors by Vecteezy" width="50px" />
    const purple = <img src="https://i.ibb.co/cC3Ry3v/purple-burst.png" alt="Price Vectors by Vecteezy" width="50px" />
    const green = <img src="https://i.ibb.co/cxqQbg9/green-burst.png" alt="Price Vectors by Vecteezy" width="50px" />
    const blue = <img src="https://i.ibb.co/JRgFHfL/blue-burst.png" alt="Price Vectors by Vecteezy" width="50px" />
    const yellow = <img src="https://i.ibb.co/HXqddbd/yellow-burst.png" alt="Price Vectors by Vecteezy" width="50px" />
    
    return (
      <AppProvider>
        <br />
        <br />
        <Page title="Settings">
          <br />
          <Stack>
            <RadioButton
              label={red}
              id="https://i.ibb.co/3kW5XsV/red-burst.png"
              checked={selected === "https://i.ibb.co/3kW5XsV/red-burst.png"}
              onChange={this.handleStickerChange}
            />
            <RadioButton
              label={purple}
              id="https://i.ibb.co/cC3Ry3v/purple-burst.png"
              checked={selected === "https://i.ibb.co/cC3Ry3v/purple-burst.png"}
              onChange={this.handleStickerChange}
            />
            <RadioButton
              label={green}
              id="https://i.ibb.co/cxqQbg9/green-burst.png"
              checked={selected === "https://i.ibb.co/cxqQbg9/green-burst.png"}
              onChange={this.handleStickerChange}
            />
            <RadioButton
              label={blue}
              id="https://i.ibb.co/JRgFHfL/blue-burst.png"
              checked={selected === "https://i.ibb.co/JRgFHfL/blue-burst.png"}
              onChange={this.handleStickerChange}
            />
            <RadioButton
              label={yellow}
              id="https://i.ibb.co/HXqddbd/yellow-burst.png"
              checked={selected === "https://i.ibb.co/HXqddbd/yellow-burst.png"}
              onChange={this.handleStickerChange}
            />
          </Stack>
          <br />
          <br />
        </Page>
      </AppProvider>
    );
  }
}

export default Settings;
