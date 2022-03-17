module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/configs
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    // TODO: removing these two lines to remove the lint error
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/no-unsafe-argument': 0,

    '@typescript-eslint/restrict-template-expressions': [
      2,
      { allowNumber: true, allowBoolean: true },
    ],
    '@typescript-eslint/restrict-plus-operands': 2,
  },
  overrides: [
    {
      // files to check, so no `--ext` is required
      files: ['**/*.ts'],
    },
  ],
};
