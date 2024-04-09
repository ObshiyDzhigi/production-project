module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:i18next/recommended"
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
      env: {
        node: true,

        jest: true
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
    "react",
    "i18next"
  ],
  rules: {
    'no-trailing-spaces': ["off"],
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
    "no-multi-spaces": [2, { exceptions: { VariableDeclaration: true } }],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': ['error', { markupOnly: true }]

  },
  globals: {
    __IS_DEV__: true
  }
}
