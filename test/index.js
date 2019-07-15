const path = require('path')
const config = require(path.resolve(__dirname, '..', 'src', process.argv[2]))

console.log(require('util').inspect(config, { depth: 10, colors: true }))
