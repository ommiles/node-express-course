const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./00-content/first.txt', 'utf8');
const second = readFileSync('./00-content/second.txt', 'utf8');
const third = 'This is text for the third file.';
console.log('\n', first, '\n', second);

writeFileSync('./00-content/third.txt', third, { flag: 'a' });
