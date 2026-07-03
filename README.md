# 爪爪星球宠物洗护

一个使用 Next.js 构建的宠物洗护门店展示页，面向猫狗洗护、精修造型、皮毛护理和预约咨询场景。

## 功能

- 首页首屏轮播展示门店洗护环境
- 洗护服务、热门套餐、到店流程和服务承诺介绍
- 预约表单入口
- 响应式中文页面布局
- 静态图片资源统一放在 `public/` 目录

## 技术栈

- Next.js 15
- React 19
- CSS Modules 风格的全局样式文件

## 本地运行

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

浏览器打开：

```text
http://localhost:3000
```

构建生产版本：

```bash
npm run build
```

启动生产服务：

```bash
npm run start
```

## 目录结构

```text
.
├── app/
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
├── public/
│   ├── pet-grooming-hero.png
│   ├── pet-grooming-interior-bathing.png
│   ├── pet-grooming-interior-reception.png
│   └── pet-grooming-interior-styling.png
├── next.config.js
├── package.json
└── README.md
```

## 部署

该项目可以部署到支持 Next.js 的平台，例如 Vercel、Netlify 或自托管 Node.js 服务。部署前建议先执行：

```bash
npm run build
```
