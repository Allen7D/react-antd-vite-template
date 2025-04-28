import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { inspectorServer } from "@react-dev-inspector/vite-plugin";

const isDev = process.env.NODE_ENV === "development";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: isDev ? ["@react-dev-inspector/babel-plugin"] : [],
      },
    }),
    isDev && inspectorServer(),
  ],
});
