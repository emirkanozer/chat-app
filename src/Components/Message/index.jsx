import React from "react";
import MessageField from "./MessageField";
import MessageInput from "./MessageInput";
import MessageProfile from "./MessageProfile";
function Message() {
  return (
    <div>
      <MessageProfile />
      <MessageField />
      <MessageInput />
    </div>
  );
}

export default Message;
