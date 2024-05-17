# Eslint preset with support for Typescript, React, and Prettier

This project is an Eslint preset that includes rules for projects that use Typescript, React (or NEXT), and Prettier.

## Installation

To install this preset, run the following command:

```
pnpm i -D eslint-preset-test

or

yarn add -D eslint-preset-test
```

## Configuration

To use this preset in your project, add the following code to the **.eslintrc.json** file:

```
{
  "extends": "eslint-preset-test"
}
```

## Features

This preset includes the following configurations:

### Extensions

* **plugin:react/recommended**: includes the rules recommended by the React plugin.
* **plugin:react-hooks/recommended**: includes the rules recommended by the React Hooks plugin.
* **plugin:jest/recommended**: includes the rules recommended by the Jest plugin.
* **airbnb**: includes the rules recommended by the Airbnb code style.
* **plugin:@typescript-eslint/recommended**: includes the rules recommended by the @typescript-eslint plugin.
* **airbnb-typescript**: includes the rules recommended by the Airbnb code style for projects that use Typescript.
* **plugin:prettier/recommended**: includes the rules recommended by the Prettier plugin.

### Additional Rules

* **max-params**: limits the maximum number of parameters in a function.
* **react/react-in-jsx-scope**: disables the warning that React must be imported in JSX files.
* **react/prop-types**: disables the type checking of React props.
* **react/require-default-props**: disables the warning that React props should have default values.
* **import/prefer-default-export**: disables the preference for default exports in modules.
* **react/function-component-definition**: disables the warning that React functions should be defined as components.
* **react/jsx-props-no-spreading**: disables the warning that JSX props should not be spread.
* **eslint-plugin-import/no-cycle**: disables the warning of cyclic imports.
* **import/no-cycle**: disables the warning of cyclic imports.
* **@typescript-eslint/no-var-requires**: disables the warning of using the require function of Node.js.
* **global-require**: disables the warning of using the require function of Node.js.
* **import/no-extraneous-dependencies**: prevents the import of unnecessary dependencies in test files and mocks.
* **prefer-destructuring**: requires object and array destructuring when possible.
* **@typescript-eslint/ban-types**: prohibits the use of specific Typescript types.