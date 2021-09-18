module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: [
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "airbnb",
    "prettier",
  ],
  rules: {
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "react/no-unescaped-entities": 0,
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx", ".js", ".jsx"] }], // allow jsx syntax in js files (for next.js project),
    "react/jsx-props-no-spreading": ["error", { custom: "ignore" }],
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/accessible-emoji": 0,
    "import/prefer-default-export": 1,
    "no-param-reassign": 0,
    "no-use-before-define": 0,
    "prefer-promise-reject-errors": 0,
    "global-require": 0,
    "import/no-extraneous-dependencies": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/explicit-function-return-type": [
      0,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    camelcase: 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "."],
      },
    },
  },
};
