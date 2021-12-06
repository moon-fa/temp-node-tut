// Built-in Modules
// built-in modules are modules already created by others and free to use.
// For example: OS (Operating system) module, PATH module, FS (File System) module, HTTP module (to set up the http server)

// built-in modules vs your own modules
// require('./my_own_module'); it uses "./" extension
// require('build-in_module'); it does not use "./"


// To use OS module
const os = require('os')// you can also destructure it
// To get info about the current user, use the "userInfo" method
const user = os.userInfo()
console.log(user)

// To return the system uptime (time in which the OS is being running) in seconds, use "uptime" method
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
