module.exports = {
	"root": true,
	"env": {
		"es6": true,
		"mocha": true
	},
	"extends": [
		"eslint:recommended",
	],
	"plugins": [
		"mocha"
	],
	"rules": {
		"mocha/no-exclusive-tests": "error",
	}
}
