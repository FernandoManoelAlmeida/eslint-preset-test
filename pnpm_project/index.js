module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks", "prettier"],
  parserOptions: {
    project: ["**/tsconfig.json"],
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "max-params": ["warn", 3],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "import/prefer-default-export": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "eslint-plugin-import/no-cycle": "off",
    "import/no-cycle": "off",
    "@typescript-eslint/no-var-requires": "off",
    "global-require": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/mocks/**", "**/*.test.{ts,tsx}"],
      },
    ],
    "prefer-destructuring": [
      "error",
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "React.FC": {
            message: "Please don't use React.FC instead.",
            fixWith:
              "Prefer explicit definition children, like ReactNode or PropsWithChildren interface",
          },
          "React.FunctionalComponent": {
            message: "Please use React.FunctionalComponent instead.",
            fixWith:
              "Prefer explicit definition children, like ReactNode or PropsWithChildren interface",
          },
        },
      },
    ],
  },
  overrides: [
    {
      files: ["./analytics/**"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "global-require": "off",
        "no-prototype-builtins": "off",
        "no-console": "off",
      },
    },
  ],
};
