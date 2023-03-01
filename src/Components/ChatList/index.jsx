import React from "react";
import ChatItem from "./ChatItem";
import Profile from "./Profile";
import SearchFiled from "./SearchField";
import { useFilter } from "../../Services/FilterContexts/FilterContext";
import { Box } from "@chakra-ui/react";

function ChatList() {
  const { filteredUsers } = useFilter();
  console.log(filteredUsers);
  return (
    <div>
      <Profile />
      <SearchFiled />
      {filteredUsers.length > 0 &&
        filteredUsers.map((users) => {
          return (
            <Box key={users._id}>
              <ChatItem users={users} />
            </Box>
          );
        })}
    </div>
  );
}

export default ChatList;
