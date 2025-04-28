import { ConfigProvider, theme } from "antd";

import { Inspector } from "./inspector";
import App from "./App";
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
      <App />
    </ConfigProvider>
  );
}
