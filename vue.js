module.exports = {
	"root": true,
	"env": {
		"es6": true,
        "browser": true,
        "node": true,
	},
	"extends": [
		"eslint:recommended",
	],
	"rules": {
		"vue/html-self-closing": [
			"error",
			{
				"html": {
					"void": "never",
					"normal": "never",
					"component": "never"
				},
				"svg": "never",
				"math": "never"
			}
		],
		"vue/max-attributes-per-line": 0,
		"vue/html-indent": [
			2,
			4
		],
		"vue/no-v-html": "warn"

	}
}
