import { Box, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { useFilter } from "../../../Services/FilterContexts/FilterContext";
import { useState } from "react";

function SearchFiled() {
  const { filteredChats } = useFilter();
  const [filterText, setFilterText] = useState("");

  const handleChange = (value) => {
    setFilterText(value);
  };
  return (
    <Box py={2} px={4}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          filteredChats(filterText);
        }}
      >
        <InputGroup
          border={"1px solid rgb(42,42,42)"}
          borderRadius="8px"
          backgroundColor={"rgb(42,42,42)"}
        >
          <InputLeftElement
            pointerEvents="none"
            children={<MdSearch color="gray.300" />}
          />
          <Input
            onChange={(e) => handleChange(e.target.value)}
            type="text"
            placeholder="Search or send new message "
            outline="none"
            focusBorderColor="transparent"
            border={"none"}
          />
        </InputGroup>
      </form>
    </Box>
  );
}

export default SearchFiled;
