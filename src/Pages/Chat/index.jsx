import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ChatList from "../../Components/ChatList";
import Message from "../../Components/Message";
import styles from "./styles.module.css";

function ChatPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access-token");
    if (token === null) {
      navigate("/");
    }
  }, []);
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
