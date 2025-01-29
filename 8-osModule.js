const os = require("os");

// info about current user
const user = os.userInfo();

// method returns the system uptime in seconds
const uptime = os.uptime();

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOS);
