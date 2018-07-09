import React, { Component } from "react";
export class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, type, value, handlerChange, labelName } = this.props;
    return (
      <div>
        <label>
          {labelName}
          <input
            name={name}
            type={type}
            value={value}
            onChange={e => handlerChange(e)}
          />
        </label>
        <span>{value}</span>
      </div>
    );
  }
}
