import React, { Component } from "react";
import "./style.scss";
export default class MessageBord extends Component {
  constructor(props) {
    super(props);
  }
  textMessages(listMessages) {
    if (listMessages.length) {
      let text = listMessages.map((message, i) => (
        <li key={message.name + message.message + i}>
          <div>{message.name}</div>
          <div>{message.message}</div>
        </li>
      ));
      return text;
    }
    return false;
  }

  render() {
    const { messages } = this.props;

    return <ul className="message__list">{this.textMessages(messages)}</ul>;
  }
}
