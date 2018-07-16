import React, { Component } from "react";
import TextField from "material-ui/TextField";

export default class Input extends Component {
  render() {
    const { input, label, helpertext, uniqName, ...custom } = this.props;
    return (
      <div>
        <TextField
          id={uniqName}
          helpertext={helpertext}
          placeholder={label}
          {...input}
          {...custom}
        />
      </div>
    );
  }
}
