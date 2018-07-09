import React, { Component } from "react";

export class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;
    return <button>{name}</button>;
  }
}
