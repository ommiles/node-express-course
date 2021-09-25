// You may not write your own events in your node app, however they are a core building block of node.
// Many built-in modules in node rely on events, so it is good to have an understanding.
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// Name of the event is response.
customEmitter.on('response', (name, id) => {
  console.log(`\n Data received. \n Name: ${name}. \n ID: ${id}. \n`);
});

customEmitter.on('response', () => {
  console.log(`Some other logic...`);
});

// Order matters, must listen for event, then emit it.
customEmitter.emit('response', 'Miles', 923414810);
