module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  globals: {
    context: 'readonly',
    given: 'readonly',
  },
  ignorePatterns: [
    'node_modules',
  ],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'unused-imports',
    'flowtype',
    '@emotion',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    'react/function-component-definition': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }],
    'no-console': ['warn', {
      allow: ['warn', 'error'],
    }],
    'import/no-unresolved': 'error',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
    'simple-import-sort/imports': ['error', {
      groups: [
        // Node.js builtins. You could also generate this regex if you use a `.js` config.
        // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
        ['^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'], // Packages. `react` related packages come first.
        ['^react'], ['^@?\\w'], // Internal packages.
        ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'], // Side effect imports.
        ['^\\u0000'], // Parent imports. Put `..` last.
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Other relative imports. Put same-folder imports and `.` last.
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // Style imports.
        ['^.+\\.s?css$'],
      ],
    }],
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
    }],
    'react/jsx-props-no-spreading': ['error'],
    'import/no-extraneous-dependencies': ['error'],
    'jest/no-identical-title': 'off',
    'jsx-a11y/label-has-associated-control': [2, {
      labelAttributes: ['label'],
      depth: 3,
    }],
    'react/require-default-props': [2, {
      ignoreFunctionalComponents: true,
    }],
    'react/jsx-no-useless-fragment': ['error', {
      allowExpressions: true,
    }],
    'no-underscore-dangle': ['error', {
      allow: ['_sys'],
    }],
    'jsx-a11y/anchor-is-valid': ['error', {
      aspects: ['invalidHref'],
    }],
  },
};
