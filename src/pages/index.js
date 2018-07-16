import React, { Component } from "react";
import { sendMessage } from "../store/actions";
import { connect } from "react-redux";
import MessageBord from "../componets/MessageBord";
import InputField from "./InputField";
import "./style.scss";
class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.onSend = this.onSend.bind(this);
  }

  onSend(values) {
    this.props.sendMessage(values);
  }
  render() {
    return (
      <div className="chat-page">
        <div className="send-panel">
          <InputField onSubmit={this.onSend} />
        </div>
        <div className="chat-window">
          <MessageBord messages={[{ name: "4", message: "3" }]} />
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
)(ChatPage);
