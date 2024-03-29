module.exports = {
  "root": true,
  "env": {
    "es6": true,
  },
  "extends": [
    "eslint:recommended",
  ],
  "rules": {
    "quote-props": ["warn", "consistent-as-needed"],
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "no-debugger": 0,
    "array-element-newline": ["error", "consistent"],
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "never"],
    "no-console": "error",
    "indent": ["error", 4, { "SwitchCase": 1, "ArrayExpression": "first" }],
  }
}
