module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
