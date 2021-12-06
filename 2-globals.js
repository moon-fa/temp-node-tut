// GLOBALS (variables can be accessed any where in your Nodejs application below are some but there are more) - NO WINDOW (in Nodejs there are not window objects b/c there is not browser) !!!!

// __dirname  - give us a path to current directory
// __filename - give us a file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about environment where the program is being executed

// console.log(__dirname); // gives the path of the current folder (current directory); 
// "path" is the order in which an operating system or program searches for a file or executable program.
// console.log(__filename); // gives the current file name.
// console.log(process);
// console.log(module);
// console.log(require);

// This will print "hello world" after 1 second; to stop (abort) it, use "CTRL+C"
setInterval(() => {
    console.log('hello  world');
}, 1000)
