import "./App.css";
import Login from "./Pages/Auth/LoginPage";
import Register from "./Pages/Auth/RegisterPage";
import ChatPage from "./Pages/Chat";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import NotFound from "./Pages/Error";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/messages" element={<ChatPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
