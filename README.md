# react-calculator

🚧 重构done 🚧

基于`create-react-app`构建

Install it and run:

```sh
npm install
npm start
```

## 项目架构

- public
  - setting.json:进行一些全局的设置
- src
  - components:一些抽象出的组件(在工程中一般放的是可复用的组件)
  - config: 配置文件，用于全局主题的配置
  - context: 用于组件透传的上下文
  - model: 全局状态的存储和管理
  - views: 视图，写各个页面
  - index.js: 入口

使用了 useReducer 和 useContext ，没有使用第三方状态管理

## 思考题

1. 如何在public中引入`setting.json`更改配置

    简陋的解决方案：引入jquery,写`<script>`标签来解决。

记录：
gh-pages `<script>`标签要引入./相对路径，默认是绝对路径会404,要更改一下homepage参数
