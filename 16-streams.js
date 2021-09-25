const { createReadStream } = require('fs');

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./00-content/big.txt', { encoding: 'utf8' });

stream.on('data', (result) => {
  console.log(result);
});
stream.on('error', console.log);
