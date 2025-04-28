import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "@/App.tsx";
import { Inspector } from "@/inspector";

import "./index.less";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Inspector />
    <App />
  </StrictMode>
);
