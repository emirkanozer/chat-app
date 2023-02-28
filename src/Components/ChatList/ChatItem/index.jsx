import {
  Box,
  Text,
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";
import { useAuth } from "../../../Services/AuthContexts/AuthContext";
import { useFilter } from "../../../Services/FilterContexts/FilterContext";

function ChatItem() {
  const { user } = useAuth();
  const { filteredUsers } = useFilter();

  return (
    <Box
      display="flex"
      w={"100%"}
      alignItems="center"
      _hover={{ cursor: "pointer", backgroundColor: "rgb(42,42,42)" }}
    >
      <Box p={4}>
        <Box borderRadius="50%" w="3rem" h="3rem">
          <Avatar src="https://bit.ly/sage-adebayo" />
        </Box>
      </Box>
      <Box
        display={"flex"}
        w="100%"
        justifyContent={"space-between"}
        alignItems="center"
        borderBottom="1px solid rgb(40,40,40)"
      >
        <Box>
          <Text fontSize={"1em"}>{user}</Text>
          <Text fontSize={"xs"} mt={1} mb={2}>
            Deneme
          </Text>
        </Box>

        <Box
          gap={"4px"}
          mr={3}
          display={"flex"}
          flexDirection="column"
          alignItems={"center"}
        >
          <Text textAlign="center" fontSize={"xs"}>
            Date
          </Text>
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
              >
                Delete Message
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
}

export default ChatItem;
