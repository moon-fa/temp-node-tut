// Modules:
// It will be impossible to type the code in just on file; so the
// way it works is:
// you run one main file 
// and split code in other files called "modules"

// Nodejs uses "CommonJS" Library, and every file in Nodejs is a module (by default)
// Modules - Encapsulated Code (only share minimum (what we want))

// To access the "exports" properties, we need the keyword "require", "./", and the file name (require('./file_name')) where they were created.
// However, if they are in a different folder such as one above, you would use "../" and so on.
// "require" can be accessed by creating a variable or not.
const data = require('./6-alternative-flavor');
const sayHi = require('./5-utils');
const names = require('./4-names'); // it can also be destructured b/c it's an object as const {john, peter} = require('./4-names');
// console.log(`${names.john} ${names.peter}`) // this will print: john peter
// console.log(names); // This will print: { john: 'john', peter: 'peter' }

// console.log(data)
require('./7-mind-grenade')

// This function is being accessed from "5-utils" file
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)