import eslintPluginNode from 'eslint-plugin-n';

export default [
  {
    ignores: ['node_modules/**'],
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      node: eslintPluginNode,
    },
    rules: {
      'no-console': 'off',
      'node/no-unsupported-features/es-syntax': 'off',
    },
  },
];
