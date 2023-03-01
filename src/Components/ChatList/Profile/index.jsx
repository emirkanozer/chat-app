import {
  Box,
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdMessage, MdMoreVert } from "react-icons/md";
import { useAuth } from "../../../Services/AuthContexts/AuthContext";

function Profile() {
  const { logout, user } = useAuth();
  return (
    <Box
      px={4}
      alignItems="center"
      display={"flex"}
      justifyContent={"space-between"}
      borderBottom={"1px solid rgb(40,40,40)"}
      height="6vh"
    >
      <Box
        _hover={{ cursor: "pointer" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Avatar name={user} />
        <Text>{user}</Text>
      </Box>
      <Box display={"flex"} alignItems="center" gap="1rem">
        <Box
          _hover={{ cursor: "pointer", backgroundColor: "rgba(32,32,32,0.5)" }}
        >
          <MdMessage />
        </Box>

        <Box
          _hover={{ cursor: "pointer", backgroundColor: "rgba(32,32,32,0.5)" }}
        >
          <Menu>
            <MenuButton
              h="1rem"
              w="1rem"
              as={IconButton}
              variant="none"
              icon={<MdMoreVert />}
            />
            <MenuList border={"none"} backgroundColor={"black"}>
              <MenuItem
                backgroundColor={"black"}
                _hover={{ backgroundColor: "rgb(32,32,32)" }}
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
