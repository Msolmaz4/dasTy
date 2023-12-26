# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```

│  
├─ .gitignore
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.js
├─ public
│  ├─ det.jpg
│  ├─ usa.jpg
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ 1.webp
│  │  └─ react.svg
│  ├─ hooks
│  │  ├─ useFirms.ts
│  │  ├─ useProducts.ts
│  │  ├─ usePurchases.ts
│  │  ├─ useSales.ts
│  │  └─ useSprache.ts
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ Brands.tsx
│  │  ├─ BrandsCart.tsx
│  │  ├─ DeatailModal.tsx
│  │  ├─ Eroro.tsx
│  │  ├─ FirmaCard.tsx
│  │  ├─ Firms.tsx
│  │  ├─ FirmsModal.tsx
│  │  ├─ Home.tsx
│  │  ├─ HomeAreaCard.tsx
│  │  ├─ HomeCard.tsx
│  │  ├─ Menu.tsx
│  │  ├─ PrivatRouter.tsx
│  │  ├─ ProductModal.tsx
│  │  ├─ Products.tsx
│  │  ├─ Purchases.tsx
│  │  ├─ Sales.tsx
│  │  ├─ Sigin.tsx
│  │  ├─ Signup.tsx
│  │  └─ Stock.tsx
│  ├─ redux
│  │  ├─ firmaSlice.ts
│  │  ├─ hooks.ts
│  │  ├─ productSlice.ts
│  │  ├─ purchasesSlice.ts
│  │  ├─ saleSlice.ts
│  │  ├─ store.ts
│  │  └─ userSlice.ts
│  ├─ routes.tsx
│  └─ vite-env.d.ts
├─ tailwind.config.js
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```