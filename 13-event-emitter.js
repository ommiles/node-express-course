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
customEmitter.emit('response', 'Miles', 'SHDIejf9wfc');
