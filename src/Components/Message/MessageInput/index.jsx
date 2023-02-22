import { Box, Input, InputGroup } from "@chakra-ui/react";
import React from "react";
import { MdEmojiEmotions } from "react-icons/md";
import { FaPaperclip } from "react-icons/fa";

function MessageInput() {
  return (
    <Box
      padding={2}
      display={"flex"}
      gap="0.5rem"
      w={"100%"}
      h={"6vh"}
      backgroundColor="rgb(24,24,24)"
      borderTop={"1px solid rgb(32,32,32)"}
      alignItems={"center"}
    >
      <Box _hover={{ cursor: "pointer" }} p={2}>
        <MdEmojiEmotions style={{ fontSize: "1.5em" }} />
      </Box>
      <Box _hover={{ cursor: "pointer" }} p={2}>
        <FaPaperclip style={{ fontSize: "1.2em" }} />
      </Box>

      <InputGroup
        border={"1px solid rgb(42,42,42)"}
        borderRadius="8px"
        backgroundColor={"rgb(42,42,42)"}
      >
        <Input
          type="text"
          placeholder="
          Write a message "
          outline="none"
          focusBorderColor="transparent"
          border={"none"}
        />
      </InputGroup>
    </Box>
  );
}

export default MessageInput;
