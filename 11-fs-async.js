// Asynchronous methods readFile and writeFile from fs module

// destructuring to use asynchronous methods, but they don't contain the word "Async" at the end  of the methods; unlikewise readFileSync and writeFileSync methods.
const {readFile, writeFile} = require('fs') // same as const fs = require('fs') // fs.readFileSync
// we need to provide a "callback"
// **we run a callback when we are done with a task**
// To use readFile, we need to provide a path, encoding, and callback function
// If you don't provide the encoding type, you will get something unreadable: a Buffer with numbers and letters
console.log('start');
//             path             enc.     callback function
readFile('./content/first.txt', 'utf8', (err,result)=>{ // nested functions are neccessary, here, to "writeFile" function have access to "first" and "second" variables.  
    if(err){
        console.log(err)
        return
    }
    // after reading the file "./content/first.txt", it would be placed in the result variable
    const first = result;
   
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        // after reading the file "./content/second.txt", it would be placed in the result variable
        const second = result;
        // a new file is written with the two previous "results" of reading
        writeFile('./content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result) => { // "result" is not returning anything, here; only when reading a file but not when writing it.
                if (err) {
                    console.log(err)
                    return
                }
               console.log('done with this task');
            }
        )
    }) // "writeFile" function is within inner "readFile"; writeFile can access to "second" variable
})// "writeFile" function is within inner "readFile", and they are within the outer "readFile"; therefore, "writeFile" can have access to both "first" and "second" variables  
console.log('starting next task');


// "non-blocking" means that the code is not execute block by block or line by line

// asynchronous (non-blocking order) execution of code
// For example, check the console's output above to see that everything is not executed in order:
// start
// starting next task 
// done with this task

// **SUMMARY**
// Some functions take too long to finish a task and nothing else can be done until they finish, but with **JavaScript Asynchronous functions and callbacks**, other
// tasks can be done because there is not need to wait for them.

// In this part we saw JavaScript Asynchronous functions and callbacks; however, there are other types, such as promises or async await. 
// You can check this at the web site nodejs.dev: https://nodejs.dev/learn/modern-asynchronous-javascript-with-async-and-await
