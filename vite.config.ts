import { defineConfig } from "vite";
import path from "node:path";
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
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        paths: [path.resolve(__dirname, "src")], // 设置 LESS 模块解析的根路径
      },
    },
  },
});
