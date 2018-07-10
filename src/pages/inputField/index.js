import React, { Component } from "react";
import InputField from "../../componets/input";
import { Field, reduxForm } from "redux-form";

class InputForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <Field
            component={InputField}
            label="UserName"
            name={"name"}
            type={"text"}
          />
          <Field
            component={InputField}
            label="Message"
            name={"message"}
            type={"text"}
          />
        </div>
      </form>
    );
  }
}
const MessageField = reduxForm({
  form: "logForm"
})(InputForm);

export default MessageField;
