## プロジェクトを作成する
```
npx create-react-app . --template typescript
```

## react-router-dom

* https://www.npmjs.com/package/react-router-dom

```
npm i react-router-dom
```

## tailwindをインストールする

* https://tailwindcss.com/docs/guides/create-react-app

```
npm i -D tailwindcss
npx tailwindcss init
```
```
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

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```