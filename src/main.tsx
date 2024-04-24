import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { App } from "./App";
import { StarsCanvas } from "./components/StarBackground/StarBackground";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StarsCanvas />
    <App />
  </React.StrictMode>
);
