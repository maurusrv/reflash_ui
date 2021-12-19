module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    semi: ['error', 'never'],
  },
}
