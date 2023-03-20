import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMicrophone,
  faPhone,
  faAngleUp,
  faClosedCaptioning,
  faDesktop,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import "./RoomFooter.scss";

const RoomFooter = () => {
  return (
    <div className="footer-item">
      <div className="left-item">
        <div className="icon-block">
          Meeting details
          <FontAwesomeIcon className="icon" icon={faAngleUp} />
        </div>
      </div>
      <div className="center-item">
        <div className="icon-block">
          <FontAwesomeIcon className="icon" icon={faAngleUp}/>
        </div>
        <div className="icon-block" >
          <FontAwesomeIcon className="icon" icon={faPhone} />
        </div>
        <div className="icon-block">
          <FontAwesomeIcon className="icon" icon={faVideo} />
        </div>
      </div>
      <div className="right-item">
        <div className="icon-block">
          <FontAwesomeIcon className="icon red" icon={faClosedCaptioning} />
          <p className="title">Turn on captions</p>
        </div>
          <div className="icon-block">
            <FontAwesomeIcon className="icon red" icon={faDesktop} />
            <p className="title">Present now</p>
          </div>
      
      </div>
    </div>
  );
};

export default RoomFooter