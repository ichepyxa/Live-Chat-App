import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from "../../";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "../Loader";
import 'firebase/firestore'

import './Messages.css'; 

const Messages = () => {

  
  const {auth, firestore} = useContext(Context);
  const [user] = useAuthState(auth);
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  );

  const dateParse = (date) => {
    return (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) 
    + ":" + 
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
  }

  if (loading) {
    return <Loader />
  }

  const messagesElem = document.querySelector('.chat-right__messages');
  if ((messagesElem !== null) && (messagesElem.scrollTop < messagesElem.scrollHeight)) {
    messagesElem.scrollTo(0, messagesElem.scrollHeight);
  }

  return (
    <div className="chat-right__messages">
      {messages[0].uid !== null ? messages.map((message,index) =>
        <div key={index} style={message.uid === user.uid ? (message.text.length < 20 ? {marginLeft: "auto"} : {marginLeft: "200px"} ) : {marginLeft: 0}} className="chat-right__messages-message">
          <div className="chat-right__messages-message__info">
            <div className="chat-right__messages-message__info-user">
              {(message.photoUrl === null) || 
                (message.photoUrl === undefined) || 
                (message.photoUrl === "")  
                ? 
                <img src="./images/img-user.png" alt="img" className="chat-right__messages-message__info-user__img" />
                :
                <img src={message.photoUrl === user.photoURL ? user.photoURL : message.photoUrl} alt="" className="chat-right__messages-message__info-user__img" />
                //<img src="./images/img-user.png" alt="img" className="chat-right__messages-message__info-user__img" />
              }
              <h2 style={message.uid === user.uid ? {color: "var(--dark-blue-color)"} : {color: "var(--blue-color)"}} className="chat-right__messages-message__info-user__name">{message.displayName === null ? "Anonymus" : message.displayName}</h2>
            </div>
            <div className="chat-right__messages-message__info-time">{message.createdAt !== null ? (dateParse(message.createdAt.toDate())) : dateParse(new Date())}</div>
          </div>
          <h5 className="chat-right__messages-message__text">{message.text}</h5>
        </div>
      ) : ""}
    </div>
  );
}

export default Messages;