import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react";
import { inspectorServer } from "@react-dev-inspector/vite-plugin";
import { theme } from "antd";

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
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: theme.defaultAlgorithm(theme.defaultSeed),
        paths: [path.resolve(__dirname, "src")], // 设置 LESS 模块解析的根路径
      },
    },
  },
});
