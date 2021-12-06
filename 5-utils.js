const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}
// This way of storing, it will be stored as the only property (no other properties will be included) in "exports" property
module.exports = sayHi;
// whereas this way of storing, it would allow to store more properties besides of "sayHi" function in the "exports" property
// module.exports = {sayHi};
// console.log(module)