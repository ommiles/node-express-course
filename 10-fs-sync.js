const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
const third = 'This is text for the third file.';
console.log('\n', first, '\n', second);

writeFileSync('./content/third.txt', third, { flag: 'a' });
