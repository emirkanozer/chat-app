import { createContext, useContext, useState } from "react";
import { useAuth } from "../../Services/AuthContexts/AuthContext";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filterText, setFilterText] = useState();
  const { user } = useAuth();
  const handleChange = (value) => {
    setFilterText(value);
  };

  const filteredChats = (inputText) => {
    console.log(inputText);
    return user.filter((username) => username.includes(inputText));
  };

  const values = { handleChange, filteredChats, filterText };

  return (
    <FilterContext.Provider value={values}> {children} </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
