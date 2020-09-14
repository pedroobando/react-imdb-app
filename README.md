# react-eslint-prettier

## Plantilla de para crear apps de reactjs, tiene configurado slint y prettier


### Instalacion

Solo agreagar a la instalacion del proyecto de React creado con:

```
yarn create react-app nameapp
```

Remove del arhcivo packege.json la siguiente linea:
```
  "eslintConfig": {
    "extends": "react-app"
  },
```

las siguientes linea de codigo:
```
yarn add -D  eslint@6.6.0 prettier babel-eslint eslint-config-prettier eslint-plugin-babel eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks 
```

### Creacion del archivo .eslintrc
```
  {
    "env": {
      "browser": true,
      "jest": true,
      "es6": true
    },
    "plugins": ["import", "babel", "react", "react-hooks"],
    "extends": [
      "plugin:prettier/recommended",
      "eslint:recommended",
      "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "parser": "babel-eslint",
    "rules": {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "no-console": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  }
```

### Creacion del archivo .prettierrc
```
  {
    "printWidth": 90,
    "arrowParens": "always",
    "bracketSpacing": true,
    "jsxBracketSameLine": true,
    "tabs": false,
    "tabWidth": 2,
    "trailingComma": "es5",
    "jsxSingleQuote": false,
    "singleQuote": true,
    "quoteProps": "preserve",
    "proseWrap": "preserve"
  }
```