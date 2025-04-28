import { createHashRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import App from "./App.tsx";

const Dashboard = lazy(() => import("@/views/Dashboard"));

// 获取需要展开的菜单项
export const getDefaultOpenKeys = (pathname: string): string[] => {
  const paths = pathname.split("/").filter(Boolean);
  const openKeys: string[] = [];

  let currentPath = "";
  paths.forEach((path) => {
    currentPath += `/${path}`;
    openKeys.push(currentPath);
  });

  return openKeys;
};

export const createRouter = () =>
  createHashRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Navigate to="dashboard" replace />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "*", // 添加通配符路由
      element: <Navigate to="/dashboard" replace />,
    },
  ]);
