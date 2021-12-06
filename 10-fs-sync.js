// FS (File System) Module; it can be used as asynchronous (non-blocking) or synchronous (blocking)

// destruturing to use synchronous methods
const {readFileSync, writeFileSync} = require('fs') // same as const fs = require('fs') // fs.readFileSync
console.log('start')
// To read a file, we need "readFileSync" method of FS module, and provide the file location and the encoding type
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

// console.log(first, second)

// To write a file, we need "writeFileSync" method with the arguments: file location (and if that file does not exist, Nodejs will create one) and a value.
// The way that NodeJs works with "writeFileSync" is creating the file with its values (content in the file), and the second time it over-writes the values (content in the file).
// writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`)

// If you need to append data to this file, then you need to add a third argument (with the property:value " flag: 'a' ")as following:
// 'a' means appending, but there are other system flags such "ax", "r", et.
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'})
console.log('done with this task');
console.log('starting the next one');

// "blocking" means that the code is executed block by block or line by line

// synchronous (blocking order) execution of code
// For example, check the console's output above to see that everything is executed in order:
// start
// done with this task
// starting the next one