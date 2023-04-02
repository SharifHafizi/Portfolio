import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  //</React.StrictMode>,
  //  I enabled StrictMode to avoid rendering components to times.
);
