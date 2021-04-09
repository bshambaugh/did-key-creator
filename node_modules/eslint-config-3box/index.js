module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    eqeqeq: ['warn', 'allow-null'],
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'no-var': 'error',
    'no-with': 'warn',
    'prefer-const': 'error',
    'prettier/prettier': ['error', require('./prettier.config')],
  },
}
