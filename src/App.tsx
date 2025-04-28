import { useState } from "react";
import { Button } from "antd";

import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.less";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="logo-container">
        <a href="" target="">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="" target="">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
