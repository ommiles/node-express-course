const { writeFileSync } = require('fs');
for (let i = 0; i < 10000; i++) {
  writeFileSync('./00-content/big.txt', `hello world ${i}\n`, { flag: 'a' });
}
