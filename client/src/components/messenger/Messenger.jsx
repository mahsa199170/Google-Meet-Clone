import React from 'react'
import { useState } from "react";
import "./Messenger.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUserFriends,
  faCommentAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
// import { formatDate } from "./../../../utils/helpers";

const Messenger = () => {
  return (
    <div className="messenger-container">
      <div className="messenger-header">
        <h3>Meeting details</h3>
        <FontAwesomeIcon
          className="icon"
          icon={faTimes}
        />
      </div>

      <div className="messenger-header-tabs">
        <div className="tab">
          <FontAwesomeIcon className="icon" icon={faUserFriends} />
          <p>People (1)</p>
        </div>
        <div className="tab active">
          <FontAwesomeIcon className="icon" icon={faCommentAlt} />
          <p>Chat</p>
        </div>
      </div>

      <div className="chat-section">
          <div  className="chat-block">
            <div className="sender">
              <small>10 PM</small>
            </div>
            <p className="msg">Here comes a actual msg</p>
          </div>
      </div>

      <div className="send-msg-section">
        <input
          placeholder="Send a message to everyone"/>
        <FontAwesomeIcon
          className="icon"
          icon={faPaperPlane}
        />
      </div>
    </div>
  )
}

export default Messenger