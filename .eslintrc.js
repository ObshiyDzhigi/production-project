module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended"
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
      env: {
        node: true
      },
      parserOptions: {
        sourceType: 'script'
      },
      extends: ['plugin:@typescript-eslint/disable-type-checked']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    "react"
  ],
  rules: {
    quotes: 'off',
    '@typescript-eslint/quotes': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    "no-unused-vars": 'warn',
    "@typescript-eslint/no-unused-vars": ['off'],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    "@typescript-eslint/explicit-function-return-type": "off",

    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off'
  }
}
