import { Layout, Menu } from "antd";
import { Outlet, useLocation } from "react-router-dom";

import { useRouterMenuItems } from "./menu";
import { getDefaultOpenKeys } from "./index";

import "./App.less";

function App() {
  const routerMenuItems = useRouterMenuItems();
  const location = useLocation();

  return (
    <Layout style={{ height: "100%", width: "100%" }}>
      <Layout>
        <Layout.Sider
          className="app-sider"
          width={168}
          style={{ backgroundColor: "white" }}
        >
          <Menu
            mode="inline"
            style={{ width: "100%" }}
            items={routerMenuItems}
            defaultOpenKeys={getDefaultOpenKeys(location.pathname)}
            selectedKeys={[location.pathname]}
          />
        </Layout.Sider>
        <Layout.Content className="app-content">
          <div className="app-outlet">
            <Outlet />
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
