import React from "react";

import './Chat.css'; 

const Chat = () => {
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
                <h4 className="chat-left__chats-item__info-desc">Я ваш рот чухал</h4>
              </div>
            </div>
            <div className="chat-left__chats-item">
              <img src="./images/img-user.png" alt="chat-img" className="chat-left__chats-item__img" />
              <div className="chat-left__chats-item__info">
                <h3 className="chat-left__chats-item__info-title">Chat №1</h3>
                <h4 className="chat-left__chats-item__info-desc">Я ваш рот чухал</h4>
              </div>
            </div>
            <div className="chat-left__chats-item">
              <img src="./images/img-user.png" alt="chat-img" className="chat-left__chats-item__img" />
              <div className="chat-left__chats-item__info">
                <h3 className="chat-left__chats-item__info-title">Chat №1</h3>
                <h4 className="chat-left__chats-item__info-desc">Я ваш рот чухал</h4>
              </div>
            </div>
            <div className="chat-left__chats-item">
              <img src="./images/img-user.png" alt="chat-img" className="chat-left__chats-item__img" />
              <div className="chat-left__chats-item__info">
                <h3 className="chat-left__chats-item__info-title">Chat №1</h3>
                <h4 className="chat-left__chats-item__info-desc">Я ваш рот чухал</h4>
              </div>
            </div>
            <div className="chat-left__chats-item">
              <img src="./images/img-user.png" alt="chat-img" className="chat-left__chats-item__img" />
              <div className="chat-left__chats-item__info">
                <h3 className="chat-left__chats-item__info-title">Chat №1</h3>
                <h4 className="chat-left__chats-item__info-desc">Я ваш рот чухал</h4>
              </div>
            </div>
            <div className="chat-left__chats-item">
              <img src="./images/img-user.png" alt="chat-img" className="chat-left__chats-item__img" />
              <div className="chat-left__chats-item__info">
                <h3 className="chat-left__chats-item__info-title">Chat №1</h3>
                <h4 className="chat-left__chats-item__info-desc">Я ваш рот чухал</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-right">

        </div>
      </div>
    </div>
  );
}

export default Chat;