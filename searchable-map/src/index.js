import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import './tailwind-config.js'
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);