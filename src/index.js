import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "./Services/AuthContexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { FilterContextProvider } from "./Services/FilterContexts/FilterContext";
import { MessageProvider } from "./Services/MessageContexts/MessageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AuthContextProvider>
          <MessageProvider>
            <FilterContextProvider>
              <App />
            </FilterContextProvider>
          </MessageProvider>
        </AuthContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
