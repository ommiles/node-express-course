// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
require('./07-code-challenge');

const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-syntax');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

console.log(data)
console.log(module.exports)

// ALTERNATIVELY, destructure the names obj that was exported.
// const { john, peter } = require('./04-names');
// sayHi(john);
// sayHi(peter);