import React, {useEffect, useState} from "react";
import "./room.css"
import RoomFooter from "../roomfooter/RoomFooter";
import RoomHeader from "../roomheader/RoomHeader";
import MeetingInfo from "../meetinginfo/MeetingInfo";
import Messenger from "../messenger/Messenger";
import io from "socket.io-client";
import Peer from "simple-peer";
const socket = io("/")
const Room = () => {


  const [roomId, setRoomId] = useState("");
  const [peers,setPeers] = useState({});
  const [stream, setStream] =useState(null);
  // const videoRef = useRef(null);
  // const videoGrid = useRef(nul);

  useEffect(()=>{
    
  }, [])

  socket.emit("join-room",roomId);

  socket.on("user-connected", ()=>{
    connectToNewUser();
  })

  const connectToNewUser = () => {
    //we want to sedn that user newly joined our videostream
  }

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(()=>{
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])
  return (
   
  
    <div className='room-container'>
      <video className="video-container" src="" controls></video>

      <RoomHeader />
      <RoomFooter />
      <MeetingInfo />
      <Messenger />

     
      </div>
      
       
      
  )
}

export default Room