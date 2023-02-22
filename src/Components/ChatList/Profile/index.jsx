import { Box } from "@chakra-ui/react";
import React from "react";
import { FaUser, FaUsers } from "react-icons/fa";
import { MdMessage, MdMoreVert } from "react-icons/md";

function Profile() {
  return (
    <Box p={4} display={"flex"} justifyContent={"space-between"}>
      <Box padding={2} _hover={{ cursor: "pointer" }}>
        <FaUser />
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
