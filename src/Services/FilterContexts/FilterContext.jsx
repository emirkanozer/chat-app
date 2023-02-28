import { createContext, useContext, useState, useEffect } from "react";
import { fetchMessages, fetchSearch } from "../../Utils/api";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filterText, setFilterText] = useState();
  const [filteredUsers, setFilteredUsers] = useState([]);

  // useEffect(() => {
  //   async() => {
  //     const messages = fetchMessages()
  //   }
  //   if (filteredUsers.length === 0) {
  //     setFilteredUsers([{}, {}]);
  //   }
  // });

  const handleChange = (value) => {
    setFilterText(value);
  };

  const filteredChats = async (inputText) => {
    const users = await fetchSearch(inputText);
    setFilteredUsers(users);
  };

  const values = { handleChange, filteredChats, filterText };

  return (
    <FilterContext.Provider value={values}> {children} </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
