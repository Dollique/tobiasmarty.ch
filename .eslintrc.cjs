module.exports = {
  root: true,
  env: {
    'vue/setup-compiler-macros': true,
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'vue/no-multiple-template-root': 0,
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['default', '[...slug]', 'error'], // ignores ~/layouts/default.vue and error.vue
      },
    ],
  },
}
