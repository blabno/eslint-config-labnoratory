'use strict';

module.exports = {
  extends: [
    'labnoratory/configurations/es5',
    'labnoratory/rules/es6'
  ],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      globalReturn: false
    }
  }
};
