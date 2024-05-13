const Prettierrc = require('./.prettierrc');

module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': [2, Prettierrc, { usePrettierrc: true }],
  },
};
