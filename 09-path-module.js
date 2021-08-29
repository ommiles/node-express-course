const path = require('path');
console.log(path.sep);
console.log(path);

const filePath = path.join('/00-content', 'subdir', 'text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, '00-content', 'subdir', 'test.txt');
console.log(absolute);
