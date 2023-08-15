module.exports = {
  root: true,
  env: {
    "vue/setup-compiler-macros": true,
    browser: true,
    node: true,
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module"
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier'],
  rules: { 'prettier/prettier': 2 },
};
