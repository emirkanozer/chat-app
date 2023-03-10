import { Box, Text, Avatar } from "@chakra-ui/react";
import React from "react";
import { MdMoreVert } from "react-icons/md";
import { useMessage } from "../../../Services/MessageContexts/MessageContext";

function MessageProfile() {
  const { profile } = useMessage();
  return (
    <Box
      w={"100%"}
      px={4}
      py={1}
      display={"flex"}
      borderBottom={"1px solid rgb(40,40,40)"}
      height="6vh"
      alignItems={"center"}
    >
      <Avatar w={12} name={profile.username} />
      <Box
        alignItems={"center"}
        w="100%"
        display="flex"
        justifyContent="space-between"
        px={4}
      >
        <Box>
          <Text>{profile.username}</Text>
        </Box>
        <Box
          _hover={{ cursor: "pointer ", backgroundColor: "rgb(32,32,32)" }}
          padding={2}
          borderRadius="50%"
        >
          <MdMoreVert />
        </Box>
      </Box>
    </Box>
  );
}

export default MessageProfile;
