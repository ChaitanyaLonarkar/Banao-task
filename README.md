# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Eslint

1. npm i eslint --save-dev
2. npx eslint --init
3. It generate the .eslint.cjs file
4. create the .eslintignore and add files to ignore
5. add this line " "eslint": "npx eslint ." " to package.json
6. To run this type commmand  npm run eslint and then solve the errors one by one

# husky

1. npm i husky --save-dev
2. npx husky init
3. updates the prepare script in package.json "{
  "prepare": "husky install"
}"