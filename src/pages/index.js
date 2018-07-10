import React, { Component } from "react";
import io from "socket.io-client";
import { connect } from "react-redux";
import FieldButton from "../componets/button";
import MessageBord from "../componets/messageBord";
import { config } from "../../server/config";

import MessageField from "./inputField";
const socket = io.connect(`http://localhost:${config.port}`);

class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { message, name } = this.state;
    socket.emit("chat", { name, message });
    socket.on("chat", data => {
      this.setState({ chatMessage: this.state.chatMessage.concat(data) });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="send-panel">
          <MessageField />
          <FieldButton name={"Send Message"} />
        </div>
        <div className="chat-window">
          <MessageBord messages={{ name: "4", message: "3" }} />
        </div>
      </div>
    );
  }
}

export default ChatPage;
