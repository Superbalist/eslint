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
 
 - `eslint-config-superbalist/index.js` Standard JavaScript / ES6 support
 - `eslint-config-superbalist/vue.js` VueJs project support
 - `eslint-config-superbalist/mocha.js` Mocha project support

_**These are only starting points and you will need to specify any additional properties dierctly in your eslintrc.json
file at project level**_

## async/await

If you're using async (e.g. `it("should pass", async () => {`) you'll get the following error:

`Parsing error: Unexpected token =>`

Add the following to your `.eslintrc.json`:

```
"parserOptions": {
	"ecmaVersion": 2017
}
```
