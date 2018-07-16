import React, { Component } from "react";
import Input from "../../componets/Input";
import FieldButton from "../../componets/Button";
import { Field, reduxForm } from "redux-form";
import "./style.scss";
class InputForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <Field
            component={Input}
            label="UserName"
            name={"name"}
            type={"text"}
            uniqName="chat_name"
          />
          <Field
            component={Input}
            label="Message"
            name={"message"}
            type={"text"}
            uniqName="chat_message"
          />
          <FieldButton name={"Send Message"} />
        </div>
      </form>
    );
  }
}
const InputField = reduxForm({
  form: "UserMessage"
})(InputForm);

export default InputField;
