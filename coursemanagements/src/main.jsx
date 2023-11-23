import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BackToTopProvider from "./context/backToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BackToTopProvider>
        <App />
      </BackToTopProvider>
    </BrowserRouter>
  </React.StrictMode>
);
