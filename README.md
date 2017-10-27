# Labnoratory eslint config

This is our eslint configuration for frontend and backend apps.


## INSTALLATION

    npm install -DE eslint-config-labnoratory

## Browser with EcmaScript 5

After installing npm package please create `.eslintrc`:

    {
      "env": {
        "browser": true
      },
      "extends": "labnoratory/configurations/es5",
      "globals": {
        "document": true,
        "window": true
      }
    }

## Node with EcmaScript 6

After installing npm package please create `.eslintrc`:

    {
      "env": {
        "node": true,
        "es6": true
      },
      "extends": "labnoratory/configurations/node-es6"
    }
