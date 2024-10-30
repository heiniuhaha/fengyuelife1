# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 技术栈说明

- 基于vite引入tailwindcss https://tailwindcss.com/docs/guides/vite

## 开发命令行

- 启动项目：npm run dev
- 打包项目：npm run build

## 工程配置

- .npmrc 配置npm镜像源为国内镜像源
- package.json 配置node版本>=20.0.0（与本地node版本一致，避免本地可运行，但远程构建失败的情况），react版本>=18.3.1（与create-react-app版本一致）

## 域名配置

- [阿里云域名控制台](https://dns.console.aliyun.com/?spm=5176.12818093_-1363046575.console-base_search-panel.dtab-product_dns.26d016d0HdzaCC#/dns/setting/fengyue.life)
