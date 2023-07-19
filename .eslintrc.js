module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['standard-with-typescript', 'eslint:recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/no-alert': 'off',
    '@typescript-eslint/no-array-constructor': 'off',
    '@typescript-eslint/no-bitwise': 'off',
    '@typescript-eslint/no-caller': 'off',
    'no-case-declarations': 'error',
    '@typescript-eslint/no-catch-shadow': 'off',
    'no-class-assign': 'error',
    'no-cond-assign': 'error',
    '@typescript-eslint/no-confusing-arrow': 'off',
    'no-console': 'error',
    '@typescript-eslint/max-len': 'off',
    '@typescript-eslint/no-alert': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'no-debugger': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/naming-convention': 'error',
    'import/no-extraneous-dependencies': 'off',
    'object-curly-spacing': [1, 'always'],
    'max-classes-per-file': ['error', 4],
    semi: 'off',
    '@typescript-eslint/semi': 'off',
  },
};
