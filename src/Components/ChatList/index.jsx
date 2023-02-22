import React from "react";
import ChatItem from "./ChatItem";
import Profile from "./Profile";
import SearchFiled from "./SearchField";

function ChatList() {
  return (
    <div>
      <Profile />
      <SearchFiled />
      <ChatItem />
    </div>
  );
}

export default ChatList;
