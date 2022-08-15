import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ShortenContextProvidor } from "./context/shorten-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShortenContextProvidor>
      <App />
    </ShortenContextProvidor>
  </React.StrictMode>
);
