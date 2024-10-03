# 構築
1. [プロジェクトを作成する](#プロジェクトを作成する)
2. [react-router-dom](#react-router-dom)
3. [tailwindをインストールする](#tailwindをインストールする)
4. [MUIのインストール](#muiのインストール)
   1. [Drawer](#drawer)

## プロジェクトを作成する

```bash
npx create-react-app . --template typescript
```

## react-router-dom

* https://www.npmjs.com/package/react-router-dom

```bash
npm i react-router-dom
```

## tailwindをインストールする

* https://tailwindcss.com/docs/guides/create-react-app

1. tailwind cssのインストールと初期化

```bash
npm i -D tailwindcss
npx tailwindcss init
```

2. tailwind.config.jsの編集

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. index.cssの編集

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## MUIのインストール

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### Drawer

* https://mui.com/material-ui/react-drawer/

```bash
npm i axios
```

```bash
npm install @fullcalendar/react @fullcalendar/core @fullcalendar/daygrid
```