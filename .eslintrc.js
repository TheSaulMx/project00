const Prettierrc = require('./.prettierrc');

module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:react/jsx-runtime'],
  rules: {
    'prettier/prettier': [2, Prettierrc, { usePrettierrc: true }],
  },
};
