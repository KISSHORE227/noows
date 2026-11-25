import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import BriefProvider from "./context/BriefProvider";
import ThemeProvider from "./context/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BriefProvider>
       <ThemeProvider>
        <App />
        </ThemeProvider>
      </BriefProvider>
    </BrowserRouter>
  </StrictMode>
);