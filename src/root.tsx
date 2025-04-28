import { ConfigProvider, theme } from "antd";
import { RouterProvider } from "react-router-dom";

import { Inspector } from "./inspector";
import { createRouter } from "./router";
// 引入重置样式
import "./assets/styles/reset.less";

ConfigProvider.config({
  theme: {
    algorithm: theme.defaultAlgorithm,
  },
});

export default function Root() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <Inspector keys={["shift", "ctrl", "f"]} />
      <RouterProvider router={createRouter()} />
    </ConfigProvider>
  );
}
