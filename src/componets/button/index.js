import React from "react";
import Button from "@material-ui/core/Button";

export default class FieldButton extends React.PureComponent {
  render() {
    const { className, name } = this.props;
    return (
      <Button
        variant="outlined"
        size="medium"
        color="primary"
        className={className}
      >
        {name}
      </Button>
    );
  }
}
