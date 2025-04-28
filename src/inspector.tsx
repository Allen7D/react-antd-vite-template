import { Inspector as DevInspector } from "react-dev-inspector";

const isDev = process.env.NODE_ENV === "development";
// 快捷键可以自行配置，默认是 shift + ctrl + f
const defaultHotKeys = ["shift", "ctrl", "f"];

export const Inspector = (props: { keys?: string[] }) => {
  const { keys = defaultHotKeys } = props;

  return isDev ? <DevInspector keys={keys} /> : null;
};
