import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { fetchMe } from "../../Utils/api";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLogin, setLogin] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const handleLogin = (value) => {
    if (value === "login") {
      navigate("/login");
    } else {
      navigate("/register");
    }
  };

  const login = (data) => {
    localStorage.setItem("logged-in", "true");
    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);
  };

  const logout = () => {
    localStorage.removeItem("logged-in");
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    navigate("/");
  };

  const values = {
    isLogin,
    user,
    setLogin,
    login,
    handleLogin,
    logout,
    setUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
