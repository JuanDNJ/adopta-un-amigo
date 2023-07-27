module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "standard",
    "eslint-config-prettier",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true } },
  settings: { react: { version: "18.2" } },
  plugins: ["react","react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "react/prop-types": "off",
    "camelcase": "warn",
  },
};
