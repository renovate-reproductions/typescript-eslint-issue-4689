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
    ecmaVersion: 9,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.mjs'],
  },
  rules: {
    // other rules
    'consistent-return': 'error',
    eqeqeq: 'error',
    'no-console': 'error',
    'no-negated-condition': 'error',
    'no-param-reassign': 'error',
    'no-template-curly-in-string': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true, // conflicts with our other import ordering rules
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],

    // disallow direct `nock` module usage as it causes memory issues.
    // disallow `parse-link-header` to allow override ENV https://github.com/thlorenz/parse-link-header#environmental-variables
    'no-restricted-imports': [2, { paths: ['nock', 'parse-link-header'] }],

    // Makes no sense to allow type inference for expression parameters, but require typing the response
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],

    // TODO: fix lint
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 2,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false,
      },
    ],
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/prefer-nullish-coalescing': 2,
    curly: [2, 'all'],
    'require-await': 2,
    // next 2 rules disabled due to https://github.com/microsoft/TypeScript/issues/20024
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,

    // TODO: fix me
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-argument': 0, // thousands of errors :-/

    '@typescript-eslint/restrict-template-expressions': [
      2,
      { allowNumber: true, allowBoolean: true },
    ],
    '@typescript-eslint/restrict-plus-operands': 2,

    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
    ],

    '@typescript-eslint/unbound-method': 2,
    '@typescript-eslint/ban-types': 2,
  },
  overrides: [
    {
      // files to check, so no `--ext` is required
      files: ['**/*.{js,mjs,cjs,ts}'],
    },
    {
      files: ['**/*.spec.ts', 'test/**'],
      env: {
        jest: true,
      },
      rules: {
        'no-template-curly-in-string': 0,
        'prefer-destructuring': 0,
        'prefer-promise-reject-errors': 0,
        'import/no-dynamic-require': 0,
        'global-require': 0,

        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-object-literal-type-assertion': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/unbound-method': 0,

        'jest/valid-title': [0, { ignoreTypeOfDescribeName: true }],
        'max-classes-per-file': 0,
        'class-methods-use-this': 0,
      },
    },
    {
      files: ['**/*.{js,mjs,cjs}'],

      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/restrict-template-expressions': 0,
      },
    },
    {
      files: ['tools/**/*.{ts,js,mjs,cjs}'],
      env: {
        node: true,
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
    {
      files: ['tools/**/*.{js,cjs}', 'bin/*.{js,cjs}'],
      rules: {
        // need commonjs
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.mjs'],
      rules: {
        // esm always requires extensions
        'import/extensions': 0,
      },
    },
  ],
};
