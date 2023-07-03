import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// import main.css
import "bootstrap/dist/css/bootstrap.min.css";
import "./dist/css/main.css";

// import fonts
import "./assets/fonts/Optio___.ttf";

// import browser router dom
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
