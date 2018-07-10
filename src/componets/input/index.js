import React from "react";
import TextField from "material-ui/TextField";
export default class InputField extends React.PureComponent {
  render() {
    const { input, label, helpertext, ...custom } = this.props;
    return (
      <div>
        <TextField
          helpertext={helpertext}
          placeholder={label}
          {...input}
          {...custom}
        />
      </div>
    );
  }
}
