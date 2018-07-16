import React, { PureComponent } from "react";
import InputField from "../../componets/Input";
import FieldButton from "../../componets/Button";
import { Field, reduxForm } from "redux-form";

class InputForm extends PureComponent {
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
          <FieldButton name={"Send Message"} />
        </div>
      </form>
    );
  }
}
const MessageField = reduxForm({
  form: "UserMessage"
})(InputForm);

export default MessageField;
