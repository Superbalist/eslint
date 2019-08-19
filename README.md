# eslint

Shared Superbalist linting rules for js

## Install
`npm install Superbalist/eslint` 

In your project root

**.eslintrc.js**
```javascript
module.exports={
	extends: [
		"./node_modules/eslint-config-superbalist/index.js"
	]
}
```

For additional support, one could add more sections to the `extends` array. Sections supported:
 
 - `eslint-config-superbalist/vue.js` Standard JavaScript / ES6 support
 - `eslint-config-superbalist/vue.js` VueJs project support
 - `eslint-config-superbalist/mocha.js` Mocha project support

_**These are only starting points and you will need to specify any additional properties dierctly in your eslintrc.json
file at project level**_
