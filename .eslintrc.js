module.exports = {
  'root': true,
  'env': {
    'node': true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  'rules': {
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'require-await': 'error',
  },
  'parserOptions': {
    'parser': 'babel-eslint'
  }
};
