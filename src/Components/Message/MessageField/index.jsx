import React from "react";
import { Box, Text } from "@chakra-ui/react";
function MessageField() {
  return (
    <Box
      h={"calc(95vh - (12vh + 1px ))"}
      display="flex"
      flexDirection={"column-reverse"}
      p={5}
      overflowY="auto"
    >
      <Box
        borderRadius="lg"
        backgroundColor={"gray.700"}
        padding="0.5rem"
        margin="0.5rem"
        textAlign={"left"}
        alignSelf={"flex-start"}
        w="fit-content"
        maxWidth="70%"
      >
        <Text color={"white"}>qweqweqweqwe</Text>
      </Box>
    </Box>
  );
}

export default MessageField;
