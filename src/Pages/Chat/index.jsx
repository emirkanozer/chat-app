import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ChatList from "../../Components/ChatList";
import Message from "../../Components/Message";
import styles from "./styles.module.css";
import { useAuth } from "../../Services/AuthContexts/AuthContext";
import { fetchMe } from "../../Utils/api";

function ChatPage() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeAsync = async () => {
      try {
        const me = await fetchMe();
        setUser(me.username);
      } catch (e) {
        if (e && e.response.status === 401) {
          console.log("Please login");
          navigate("/");
        }
      }
    };
    fetchMeAsync();
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
