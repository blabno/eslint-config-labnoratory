'use strict';

module.exports = {
  extends: [
    'labnoratory/rules/best-practices',
    'labnoratory/rules/errors',
    'labnoratory/rules/legacy',
    'labnoratory/rules/node',
    'labnoratory/rules/strict',
    'labnoratory/rules/style',
    'labnoratory/rules/variables'
  ],
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: true,
    jasmine: false
  },
  parserOptions: {
    sourceType: 'script',
    ecmaFeatures: {
      globalReturn: false
    }
  }
};
