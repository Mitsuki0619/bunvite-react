module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/warnings',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'unused-imports'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        'pathGroups': [
          {
            'pattern': '{react,react-dom/**}',
            'group': 'builtin',
            'position': 'before'
          },
          {
            'pattern': '@/src/**',
            'group': 'parent',
            'position': 'before'
          }
        ],
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        }
      }
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  },
}
