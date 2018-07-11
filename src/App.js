import React from "react";
import ChatPage from "./pages/";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
export default class App extends React.PureComponent {
  render() {
    return (
      <MuiThemeProvider>
        <ChatPage />
      </MuiThemeProvider>
    );
  }
}
