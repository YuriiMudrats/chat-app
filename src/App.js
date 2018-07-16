import React, { Component } from "react";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { store } from "./store";
import MainPage from "./containers/MainPage";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <MainPage />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
