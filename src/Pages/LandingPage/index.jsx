import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../Services/AuthContexts/AuthContext";
function LandingPage() {
  const navigate = useNavigate();
  const { setLogin, handleLogin } = useAuth();

  useEffect(() => {
    const accessToken = localStorage.getItem("access-token");
    const refreshToken = localStorage.getItem("refresh-token");

    if (accessToken && refreshToken) {
      setLogin(true);
      navigate("/messages");
    }
  }, [setLogin]);

  return (
    <div>
      <h1>Welcome the Chat App! </h1>
      <br />
      <Button
        mr={2}
        onClick={() => {
          handleLogin("login");
        }}
        colorScheme={"whatsapp"}
      >
        Sign in
      </Button>
      <Button
        onClick={() => {
          handleLogin("register");
        }}
        colorScheme={"pink"}
      >
        Sign up
      </Button>
    </div>
  );
}

export default LandingPage;
