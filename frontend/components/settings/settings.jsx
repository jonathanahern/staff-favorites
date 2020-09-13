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
      sticker: "red",
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStickerChange = this.handleStickerChange.bind(this);
  }

  handleStickerChange(checked, newVal, test) {
    console.log(newVal);
    this.setState({ sticker: newVal });
  }

  render() {
    let selected = this.state.sticker;
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
              id="red"
              checked={selected === "red"}
              onChange={this.handleStickerChange}
            />
            <RadioButton
              label={purple}
              id="purple"
              checked={selected === "purple"}
              onChange={this.handleStickerChange}
            />
            <RadioButton
              label={green}
              id="green"
              checked={selected === "green"}
              onChange={this.handleStickerChange}
            />
            <RadioButton
              label={blue}
              id="blue"
              checked={selected === "blue"}
              onChange={this.handleStickerChange}
            />
            <RadioButton
              label={yellow}
              id="yellow"
              checked={selected === "yellow"}
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
