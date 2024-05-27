module.exports = {
    "env": {
        "browser": true,
        "node": true,
        " es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 15,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "unused-imports/no-unused-vars": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "react/no-unescaped-entities": "off",
        " no-useless-escape": "off",
        "prefer-const": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "no-undef": "off",
        "@typescript-eslint / no - explicit - any": "off",
        "@typescript-eslint/triple-slash-reference": "off"
    },

};
