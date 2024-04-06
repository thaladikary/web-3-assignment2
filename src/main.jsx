import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { ContextProvider } from "./Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
