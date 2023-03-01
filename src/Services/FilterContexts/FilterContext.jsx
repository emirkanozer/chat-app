import { createContext, useContext, useState } from "react";
import { fetchSearch } from "../../Utils/api";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filteredUsers, setFilteredUsers] = useState([]);

  const filteredChats = async (inputText) => {
    const users = await fetchSearch(inputText);
    setFilteredUsers(users);
  };

  const values = { filteredChats, filteredUsers };

  return (
    <FilterContext.Provider value={values}> {children} </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
