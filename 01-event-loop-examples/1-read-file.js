const { readFile } = require('fs');

console.log('First task logged...');

readFile('./00-content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log('First task complete!');
});

console.log('On to the next task... GOTCHA!');
