import React, { PureComponen } from "react";
import ChatPage from "./pages";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default class App extends PureComponen {
  render() {
    return (
      <MuiThemeProvider>
        <ChatPage />
      </MuiThemeProvider>
    );
  }
}
