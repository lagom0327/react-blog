module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    jquery: true
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  parser: "babel-eslint",
  plugins: [
    'react',
  ],
  rules: {
    "no-console": "off",
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle':  ['error', { 'allow': ['_total'] }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
