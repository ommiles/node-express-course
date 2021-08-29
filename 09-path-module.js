const path = require('path');
console.log(path.sep);
console.log(path);

const filePath = path.join('/content', 'subdir', 'text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subdir', 'test.txt');
console.log(absolute);
