import React from "react";
import ChatList from "../../Components/ChatList";
import Message from "../../Components/Message";
import styles from "./styles.module.css";
function ChatPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <ChatList />
      </div>
      <div className={styles.right}>
        <Message />
      </div>
    </div>
  );
}

export default ChatPage;
