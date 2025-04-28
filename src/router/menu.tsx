import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number] & {
  children?: MenuItem[];
};

const hasPermission = (...args: unknown[]) => {
  return true;
};

export const useRouterMenuItems = () => {
  const filterMenuItems = (items: MenuItem[]): unknown[] => {
    return items
      .filter((item) => {
        if (!item.key) return true;

        if (item.children?.length) {
          // 检查是否有任何子菜单有权限访问
          const hasChildrenWithPermission = item.children.some(
            (child: MenuItem) => {
              if (child?.children?.length) {
                // 递归检查更深层级的子菜单
                return child.children.some((grandChild: MenuItem) =>
                  grandChild.key
                    ? hasPermission(grandChild.key.toString())
                    : false
                );
              }
              return child.key ? hasPermission(child.key.toString()) : false;
            }
          );
          return hasChildrenWithPermission;
        }

        // 叶子节点直接检查权限
        return hasPermission(item.key.toString());
      })
      .map((item) => {
        if (item.children) {
          const filteredChildren = filterMenuItems(item.children);
          // 只返回有权限的子菜单
          return {
            ...item,
            children:
              filteredChildren.length > 0 ? filteredChildren : undefined,
          };
        }
        return item;
      })
      .filter((item) => item.children || item.key);
  };

  const routerMenuItems = [
    {
      label: <Link to={"/dashboard"}>Dashboard</Link>,
      key: "/dashboard",
      icon: <HomeOutlined style={{ fontSize: 14 }} />,
    },
  ];

  const filteredMenuItems = [...filterMenuItems(routerMenuItems)];
  return filteredMenuItems;
};
