module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/standard',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    process: 'readonly',
    cy: 'readonly',
    Cypress: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'promise',
    'import',
    'jest',
    'jsx-a11y',
    'prefer-arrow',
    'prettier',
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  root: true,
  rules: {
    'linebreak-style': ['error', 'unix'],
    'newline-before-return': 'error',
    'no-console': 'warn',
    'no-continue': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'require-yield': 'error',
    semi: ['error', 'always'],
    'import/no-cycle': [0, { ignoreExternal: true }],
    'import/no-unresolved': [0],
    'import/no-default-export': 'error',
    'react/display-name': 'off',
    'import/extensions': ["never"],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    // @typescript-eslint
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '[Rr]eact',
      },
    ],

    // airbnb
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
    ],
    // prefer-arrow
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: true,
        classPropertiesAllowed: false,
      },
    ],

    // react
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['jsx', 'tsx'],
      },
    ],
    'react/jsx-props-no-spreading': [
      'warn',
      {
        custom: 'ignore',
      },
    ],
    'react/prop-types': 'off',
    'react/prefer-stateless-function': 'off',

    // react hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // import
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__specs__/**',
          '**/*/*.spec.*',
          '**/__tests__/**',
          '**/*/*.test.*',
          'src/setupTests.*',
          '.storybook/**',
          'stories/**',
          '**/*.stories.jsx',
        ],
      },
    ],
    'import/prefer-default-export': 'off',

    // TypeScript
    '@typescript-eslint/explicit-function-return-type': 'off',

    // prettier
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        useTabs: false,
        'react/jsx-max-props-per-line': [1, { when: 'always' }],
      },
    ],
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },

    react: {
      version: 'detect',
    },
  },
};
