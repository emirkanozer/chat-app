import { io } from "socket.io-client";
import { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState([]);
  const [text, setText] = useState("");
  const [sendTo, setSendTo] = useState("");
  const [profile, setProfile] = useState([]);

  // const socket = io(`${process.env.REACT_APP_WS}`, {
  //   auth: {
  //     token: `${localStorage.getItem("access-token")}`,
  //   },
  // });

  // const listen = () => {
  //   socket.on("message", (message) => {
  //     console.log(message);
  //   });
  // };

  const values = {
    message,
    setMessage,
    text,
    // listen,
    setText,
    sendTo,
    setSendTo,
    setProfile,
    profile,
  };

  return (
    <MessageContext.Provider value={values}>{children}</MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
