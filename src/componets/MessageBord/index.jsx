import React, { Component } from "react";

import "./style.scss";

export default class MessageBord extends Component {
  constructor(props) {
    super(props);
  }
  textMessages(listMessages) {
    let text = listMessages.map((message, i) => (
      <li className="message__list" key={message.name + message.message + i}>
        <div>
          <img
            className="message__user__avatar"
            src="https://www.bitgab.com/uploads/profile/files/default.png"
          />
        </div>
        <h3 className="message__user__name">{message.name}</h3>
        <p className="message__user__text">{message.message}</p>
      </li>
    ));
    return <ul className="messages">{text}</ul>;
  }

  render() {
    const { messages } = this.props;

    return messages.length ? this.textMessages(messages) : null;
  }
}
