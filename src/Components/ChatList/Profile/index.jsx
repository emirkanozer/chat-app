import { Box, Avatar } from "@chakra-ui/react";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { MdMessage, MdMoreVert } from "react-icons/md";

function Profile() {
  return (
    <Box
      px={4}
      alignItems="center"
      display={"flex"}
      justifyContent={"space-between"}
      borderBottom={"1px solid rgb(40,40,40)"}
      height="6vh"
    >
      <Box _hover={{ cursor: "pointer" }}>
        <Avatar src="https://bit.ly/sage-adebayo" />
      </Box>
      <Box display={"flex"} gap="1rem">
        <Box
          padding={2}
          _hover={{ cursor: "pointer", backgroundColor: "rgba(32,32,32,0.5)" }}
        >
          <FaUsers />
        </Box>
        <Box
          padding={2}
          _hover={{ cursor: "pointer", backgroundColor: "rgba(32,32,32,0.5)" }}
        >
          <MdMessage />
        </Box>
        <Box
          padding={2}
          _hover={{ cursor: "pointer", backgroundColor: "rgba(32,32,32,0.5)" }}
        >
          <MdMoreVert />
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
