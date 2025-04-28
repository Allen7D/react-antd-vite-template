import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { Inspector } from "./inspector";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Inspector />
    <App />
  </StrictMode>
);
