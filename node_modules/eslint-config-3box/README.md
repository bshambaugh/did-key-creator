# eslint-config-3box

Shared ESLint configuration for 3Box projects.

## Installation

`eslint-config-3box` only includes configurations and plugins. ESlint and Prettier must be installed in the project using the config.

```sh
npm install --dev eslint prettier
npm install --dev eslint-config-3box
```

## Usage

In your project's `.eslintrc.js` file (or alternative configuration), add to the `extends` array:

```js
module.exports = {
  extends: ['3box'],
}
```

Additional configurations are also available:

- `3box/jest` when using [Jest](https://jestjs.io/) for tests.
- `3box/react` when using [React](https://reactjs.org).
- `3box/typescript` when using [TypeScript](https://www.typescriptlang.org/).

The [Prettier configuration](https://prettier.io/docs/en/configuration.html) can be imported from the `eslint-config-3box/prettier.config` module.

## License

Apache-2.0 OR MIT
