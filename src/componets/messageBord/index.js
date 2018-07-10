import React, { Component } from "react";

export default class MessageBord extends Component {
  constructor(props) {
    super(props);
  }

  textMessage(listMessages) {
    if (listMessages.length) {
      let text = listMessages.map((message, i) => (
        <li key={message.name + message.message + i}>
          <div>{message.name}</div>
          <div>{message.message}</div>
        </li>
      ));
      return text;
    }
    return null;
  }

  render() {
    const { messages } = this.props;
    return <ul style={{ float: "rigth" }}>{this.textMessage(messages)}</ul>;
  }
}
