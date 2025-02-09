/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        vueIndentScriptAndStyle: false,
      },
      { usePrettierrc: true },
    ],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
  env: {
    browser: true,
    node: true,
  },
}
