import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useMessage } from "../../../Services/MessageContexts/MessageContext";
import { useAuth } from "../../../Services/AuthContexts/AuthContext";
function MessageField() {
  const { message } = useMessage();
  const { user } = useAuth();
  console.log(message);
  return (
    <Box
      h={"calc(95vh - (12vh + 1px ))"}
      display="flex"
      flexDirection={"column-reverse"}
      p={5}
      overflowY="auto"
    >
      {message.map((msg) => (
        <Box
          borderRadius="lg"
          backgroundColor={"gray.700"}
          padding="0.5rem"
          margin="0.5rem"
          alignSelf={msg.from === user ? "flex-end" : "flex-start"}
          w="fit-content"
          maxWidth="70%"
          key={msg._id}
          style={{ scrollbarColor: "red" }}
        >
          <Text color={"white"}> {msg.content} </Text>
        </Box>
      ))}
    </Box>
  );
}

export default MessageField;
