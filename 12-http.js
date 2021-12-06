//The http module will allow us to set up (create) the web server
const http = require('http')
// "req" parameter represents the in-coming request. For example, a client is requesting from the browser your web page.
// "res" parameter is what we are sending back.
// "req and res" parameters objects
const server = http.createServer((req, res) => { // "reg and res" parameters can be named different, but the convention is to have those names.
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }else if(req.url === '/about'){
        res.end('Here is our short history')
    } else{
    // This is the default page for a url that doesn't exist
     res.end(`<h1>Oops!</h1><p>We can't seem to find the page you are looking for</p><a href="/">back home</a>`)
 
    }
    //Mistakes: you need to separate  "res.end()" with if-elseif-else logic; otherwise the server will be confuse because it cannot send two "res.end()" methods. 

    // console.log(req);// To output all what it contains the "req" object (properties filled and methods used) coming from the user
    // res.write('Welcome to our home page') // here is where you write the content for the respose
    // res.end() // this is neccessary to finish a response; however, you can also use it for writing some small content.

})


// we also need to say what port our server is going to listen to
server.listen(5000) // when we run Nodejs, Nodejs will run this module to create this server runnig all the time (unless node is stopped) at port: 5000 
// So, now you can open any browser and type "localhost:5000" (for real website, you will need an url address) and get the response (web site)


// BE AWARE: If you are going to do changes on the server, stop and run again the server; otherwise, the new changes are ignored.

// last resume from video: 1:45:00 