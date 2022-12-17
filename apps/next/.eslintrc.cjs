/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: 'next',
  settings: {
    next: {
      rootDir: '.',
    },
  },
  root: true,
};
