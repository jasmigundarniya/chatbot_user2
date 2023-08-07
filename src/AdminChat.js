import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "./features/chatSlice";
import database from "./features/firebase";
import {
  ref,
  push,
  onValue,
} from "firebase/database";

const AdminChat = () => {
  const [newMessage, setNewMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    onValue(ref(database, "messages"), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageArr = Object.values(data);
        dispatch(addMessage(messageArr));
      }
    });
  }, [dispatch]);

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (newMessage.trim() === "") return;

//     const messageData = {
//       text: newMessage.trim(),
//       type: "admin",
//       timestamp: Date.now(),
//     };

//     Notification.requestPermission().then((perm) => {
//       if (perm === "granted") {
//         new Notification(newMessage);
//       }
//     });

//     const messagesRef = ref(database, "messages");
//     push(messagesRef, messageData).then(() => {
//       setNewMessage("");
//     });
//   };

const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const messageData = {
      text: newMessage.trim(),
      type: "admin",
      timestamp: Date.now(),
    };

    const messagesRef = ref(database, "messages");
    push(messagesRef, messageData).then(() => {
      setNewMessage("");

      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          const notification = new Notification("New Message", {
            body: newMessage.trim(),
            icon: "/path/to/icon.png", 
          });

          setTimeout(() => {
            notification.close();
          }, 5000);
        }
      });
    });
  };


  return (
    <>
      <form className="chat-form">
        <h1 className="admin">User2</h1>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.type === "user" ? "msg" : "msg1"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <span className="bottom">
          <input
            type="text"
            className="chat-input"
            placeholder="Message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="chat-send-btn"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </span>
      </form>
    </>
  );
};

export default AdminChat;
