const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const { readFile, writeFile } = require('fs');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    // const first = await readFilePromise('00-content/first.txt', 'utf8');
    // const second = await readFilePromise('00-content/second.txt', 'utf8');
    const first = await readFile('00-content/first.txt', 'utf8');
    const second = await readFile('00-content/second.txt', 'utf8');
    await writeFile(
      '00-content/result-mind-grenade.txt',
      `AWESOME! ${first}  ${second}`,
      { flag: 'a' }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// SEE RESPONSE: getText('00-content/first.txt').then(console.log).catch(console.log);
// SEE ERROR: getText('00-content/firt.txt').then(console.log).catch(console.log);
