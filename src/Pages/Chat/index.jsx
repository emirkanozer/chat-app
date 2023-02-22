import React from "react";
import ChatList from "../../Components/ChatList";
import styles from "./styles.module.css";
function ChatPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <ChatList />
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default ChatPage;
