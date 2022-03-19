import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth"
import { Context } from "../../";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "../Loader";
import firebase from 'firebase/compat/app';
import 'firebase/firestore'

import './Chat.css'; 
import Messages from "../Messages/Messages";

const Chat = () => {

  const {auth, firestore} = useContext(Context);
  const [user] = useAuthState(auth);
  const [valueMessage, setValueMessage] = useState("");
  // const [valueSearch, setValueSearch] = useState("");
  const [messages, loading, error] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  );

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <h4>Ошибка</h4>
  }

  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL,
      text: valueMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    setValueMessage("");
    const messagesElem = document.querySelector('.chat-right__messages');
    if ((messagesElem !== null) && (messagesElem.scrollTop < messagesElem.scrollHeight)) {
      messagesElem.scrollTo(0, messagesElem.scrollHeight);
    }
  }

  const messagesElem = document.querySelector('.chat-right__messages');
  if ((messagesElem !== null) && (messagesElem.scrollTop < messagesElem.scrollHeight)) {
    messagesElem.scrollTo(0, messagesElem.scrollHeight);
  }

  return (
    <div className="main">
      <div className="chat-wrapper">
        <div className="chat-left">
          <div className="chat-left__info">
            <h2 className="chat-left__title">Chats</h2>
            <button className="chat-left__btn">New chat</button>
            <input type="text" className="chat-left__search" placeholder="Search..." />
          </div>
          <div className="chat-left__chats">
            <div className="chat-left__chats-item active">
              <img src="./images/img-user.png" alt="chat-img" className="chat-left__chats-item__img" />
              <div className="chat-left__chats-item__info">
                <h3 className="chat-left__chats-item__info-title">Chat №1</h3>
                <h4 className="chat-left__chats-item__info-desc">{messages[messages.length - 1].uid !== null ? ((messages[messages.length - 1].displayName === null) ? "Anonymus" : (messages[messages.length - 1].displayName)) + ": " + ((messages[messages.length - 1].text.length > 8) ? messages[messages.length - 1].text.slice(0, 8) + "..." : (messages[messages.length - 1].text)) : ""}</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="chat-right">
          <div className="chat-right__info">
            <div className="chat-right__info-left">
              <img src="./images/img-user.png" alt="chat-img" className="chat-right__info-left__img" />
              <h2 className="chat-right__info-left__title">Chat №1</h2>
            </div>
            <div className="chat-right__info-right">
              <div className="chat-right__info-right__users">
                <img src="./images/img-user.png" alt="chat-img" className="chat-right__info-right__users-item" />
                <img src="./images/img-user.png" alt="chat-img" className="chat-right__info-right__users-item" />
                <img src="./images/img-user.png" alt="chat-img" className="chat-right__info-right__users-item" />
              </div>
              <div className="chat-right__info-right_more">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <Messages />

          <div className="chat-right__send">
            <input 
              type="text" 
              placeholder="Input message..." 
              className="chat-right__send-input"
              value={valueMessage}
              onChange={e => setValueMessage(e.target.value)} />
            <button onClick={sendMessage} className="chat-right__send-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;