// local variable not shared, and it will only be available in this file
const secret = 'SUPER SECRET';
// variables to be shared when put in the "exports" object
const john = 'john';
const peter = 'peter';
// const num = 5;

// "module" contains a property called "exports"; "exports" property contains an object to be filled, and whatever you put in that object, it can be 
// accessed anywhere in the application.
// So, basically, what you put in there is shared, and what you left out is what don't want to share.

// module.exports = {john,peter, num} // it's converted as in {john:'john', peter:'peter', num:5}
module.exports = {john,peter} // in JavaScript ES6 (ECMAscript 6)sintax, you only need to provide the "property name" but its "value" is still there, as in { john:'john', peter:'peter' }
// To access the "exports" properties in the same file, you can use console:
// console.log(module)
// However, To access the "exports" properties in different files, you need "require", "./", and file name (require('./file_name')) where they were created.

