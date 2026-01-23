# React + TypeScript + Vite + AntD + Tailwind CSS

## 项目介绍

这是一个基于 React 19.2、TypeScript、Vite 6、Ant Design 6 和 Tailwind CSS 3.4 的极简前端开发模板。该模板提供了一个完整的开发环境和项目结构，帮助开发者快速搭建 React 应用。

<img src="https://raw.githubusercontent.com/Allen7D/ImageHosting/main/images/20250515095840.png" />

## 技术栈

- **React 19.2**: 用于构建用户界面的 JavaScript 库
- **TypeScript 5.7**: JavaScript 的超集，添加了静态类型定义
- **Vite 6**: 下一代前端构建工具，提供极速的开发体验
- **Ant Design 6**: 企业级 UI 设计语言和 React 组件库
- **Tailwind CSS 3.4**: 实用优先的 CSS 框架
- **React Router 7**: React 应用的声明式路由
- **React Dev Inspector**: 开发调试工具
- **ESLint 9**: 代码质量检查工具

## 项目结构

```
├── public/              # 静态资源目录
├── src/                 # 源代码目录
│   ├── assets/          # 资源文件（图片、样式等）
│   ├── components/      # 公共组件
│   ├── router/          # 路由配置
│   ├── views/           # 页面组件
│   ├── index.less       # 全局样式
│   ├── inspector.tsx    # 开发调试工具配置
│   ├── main.tsx         # 应用入口
│   ├── root.tsx         # 根组件
│   └── vite-env.d.ts    # Vite 环境类型声明
├── .gitignore           # Git 忽略文件配置
├── eslint.config.js     # ESLint 配置
├── index.html           # HTML 模板
├── package.json         # 项目依赖和脚本
├── tailwind.config.js   # Tailwind CSS 配置
├── tsconfig.json        # TypeScript 配置
├── vite.config.ts       # Vite 配置
└── README.md            # 项目文档
```

## 安装和使用

### 环境要求

- Node.js 18.0 或更高版本
- pnpm 8.0 或更高版本（推荐）或 npm/yarn

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install
# 或使用 npm
npm install
# 或使用 yarn
yarn
```

### 开发模式

```bash
pnpm dev
```
启动开发服务器在 http://localhost:3000

### 构建生产版本

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

### 代码检查

```bash
pnpm lint
```

## 特性

- 🚀 基于 Vite 的极速开发体验
- 📦 开箱即用的 React 19.2 + TypeScript 5.7 配置
- 🎨 集成 Ant Design 6 组件库和 Tailwind CSS 3.4
- 🔍 内置 React Dev Inspector 调试工具
- 📱 响应式设计支持
- 🧩 模块化的项目结构
- 🔧 完整的 ESLint 配置
- 🌐 使用 React Router 7 的路由系统

## 自定义配置

### Vite 配置

可以在 `vite.config.ts` 文件中修改 Vite 配置。

### Tailwind CSS 配置

可以在 `tailwind.config.js` 文件中自定义 Tailwind CSS 配置。

### TypeScript 配置

可以在 `tsconfig.json` 文件中修改 TypeScript 配置。


## 参考资料

[tailwindcss_3.4.17(英文文档)](https://v3.tailwindcss.com/docs/installation) - [tailwindcss_3.4.17(中文文档)](https://www.tailwindcss.cn/docs/guides/vite)
