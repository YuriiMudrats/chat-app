import React, { Component } from "react";
import { sendMessage } from "../store/actions";
import { connect } from "react-redux";
import MessageBord from "../componets/messageBord";
import MessageField from "./inputField";

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
          <MessageField onSubmit={this.onSend} />
        </div>
        <div className="chat-window">
          <MessageBord messages={{ name: "4", message: "3" }} />
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
