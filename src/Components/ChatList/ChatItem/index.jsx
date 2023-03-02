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
import { fetchMessages } from "../../../Utils/api";
import { useMessage } from "../../../Services/MessageContexts/MessageContext";
import { useAuth } from "../../../Services/AuthContexts/AuthContext";
import { useEffect } from "react";

function ChatItem({ users }) {
  const { user } = useAuth();
  const { setMessage, setSendTo } = useMessage();

  useEffect(() => {
    setSendTo(users.username);
  });

  const getMsgAsync = async () => {
    const getMessage = await fetchMessages(users.username);
    const userMsg = getMessage.results.filter((msj) => {
      return (
        (msj.to === user || msj.to === users.username) &&
        (msj.from === user || msj.from === users.username)
      );
    });
    console.log(userMsg);
    setMessage(userMsg.reverse());
  };

  return (
    <Box
      display="flex"
      w={"100%"}
      alignItems="center"
      _hover={{ cursor: "pointer", backgroundColor: "rgb(42,42,42)" }}
      key={users._id}
      onClick={() => {
        getMsgAsync();
      }}
    >
      <Box p={4}>
        <Box borderRadius="50%" w="3rem" h="3rem">
          <Avatar name={users.username} />
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
          <Text fontSize={"1em"}>{users.username}</Text>
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
