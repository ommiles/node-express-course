const os = require('os');

// returns info (obj) about current user
const user = os.userInfo();
console.log(user);

// returns the system uptime in sec.
console.log(`The System Uptime is ${os.uptime()} seconds.`);

// returns info on the operating sys
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
