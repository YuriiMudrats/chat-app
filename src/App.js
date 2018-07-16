import React, { Component } from "react";
import ChatPage from "./pages";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <ChatPage />
      </MuiThemeProvider>
    );
  }
}
