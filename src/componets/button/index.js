import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class FieldButton extends Component {
  render() {
    const { className, name } = this.props;
    return (
      <Button
        variant="outlined"
        size="medium"
        color="primary"
        type="submit"
        className={className}
      >
        {name}
      </Button>
    );
  }
}
