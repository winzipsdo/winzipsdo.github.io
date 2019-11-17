module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/prettier',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-empty': 'off',
    'no-unused-vars': 'off',
    // 'arrow-parens': 'off',
    // 'no-plusplus': 'off',
    // 'no-unused-expressions': 'off',
    // 'no-prototype-builtins': 'off',
    // 'no-restricted-syntax': 'off',
    // 'no-underscore-dangle': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
