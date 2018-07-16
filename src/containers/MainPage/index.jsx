import React, { Component } from "react";
import { connect } from "react-redux";

import { sendMessage } from "../../store/actions";
import MessageBord from "../../componets/MessageBord";
import InputField from "../InputField";

import "./style.scss";

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  onSend = values => {
    this.props.sendMessage(values);
  };
  render() {
    return (
      <div className="chat__page">
        <div className="send__panel">
          <InputField onSubmit={this.onSend} />
        </div>
        <div className="chat__window">
          <MessageBord
            messages={[
              { name: "Name", message: "Message" },
              { name: "Name", message: "Message" },
              { name: "Name", message: "Message" },
              { name: "Name", message: "Message" },
              { name: "Name", message: "Message" },
              { name: "Name", message: "Message" },
              { name: "Name", message: "Message" }
            ]}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  sendMessage
};

export default connect(
  null,
  mapDispatchToProps
)(MainPage);
