import React, { Component } from "react";
import io from "socket.io-client";
import { InputField } from "./componets/input";
import { Button } from "./componets/button";
import { MessageBord } from "./componets/messageBord";
import { config } from "../server/config";
const socket = io.connect(`http://localhost:${config.port}`);

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      chatMessage: [{ name: "Name", message: "Message" }]
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handlerChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
    const { value, chatMessage } = this.state;
    return (
      <div className="container">
        <div className="send-panel">
          <form onSubmit={this.onSubmit}>
            <div className="input-field">
              <InputField
                labelName="UserName"
                name={"name"}
                type={"text"}
                value={value}
                handlerChange={this.handlerChange}
              />
              <InputField
                labelName="Message"
                name={"message"}
                type={"text"}
                value={value}
                handlerChange={this.handlerChange}
              />
            </div>
            <Button name={"SendMessage"} />
          </form>
        </div>
        <div className="chat-window">
          <MessageBord messages={chatMessage} />
        </div>
      </div>
    );
  }
}
