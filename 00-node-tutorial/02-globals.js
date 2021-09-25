// A FEW GLOBAL VARIABLES...
// ... accessible anywhere in our node app

// 1. __dirname - path to current directory

// 2. __filename - file name

// 3. require - function to use modules
// returns an obj inc. resolve, main, extensions, and cache

// 4. module - info about current module
// returns module portion from require

// 5. process - info about env where the program is being executed

// console.log(__dirname)
// console.log(__filename)
// console.log(require)
// console.log(module)
// console.log(process)

console.log(__dirname);
setInterval(() => {
  console.log('hello world');
}, 1000);
