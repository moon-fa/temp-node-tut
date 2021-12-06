// export as you go
// Other ways of storing in the "exports" property
// exports: { items: ['item1', 'item2']}
module.exports.items = ['item1', 'item2']
const person = {
    name: 'bob',
}
// exports: { items: ['item1', 'item2'], singlePerson: {name:'bob'} }
 module.exports.singlePerson = person

// console.log(module)