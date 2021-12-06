// "npm"
// at "npmjs.com", you can find  from useful utility functions to full-blown frameworks (e.g., Express "to simplify http code in back-end ") and libraries (e.g., React)
// "npm" stands for node package manager
// "npm" calls the reusable code a "package"
// a "package" essentially is a folder that contains JavaScript code.
// Other names used for packages are dependencies or modules; so package, dependency, or module can be used interchangeably.

// basically, npm is in charge of providing packages
// "npm" is a tool that is used to install packages
// "npx" is a tool that is used to execute packages

// Be aware that at npm anybody can publish anything; a way to know if a package is good in security and usefulness, it's by looking its weekly downloads.


// when you install Nodejs, npm comes with it; and because of that you can run npm commands (have access to npm the global command) in Nodejs.
// npm - global command, comes with node
// npm --version

// We can install a package as a local dependency or as a global dependency
// However, as a "local dependency" is more common, since the arrival of npx (which is included in the latest versions of npm), there is less need for installing packages globally

// The next ***command*** installs a package as local dependency to use it only in this particular project
// npm i <packagName> //"i" stands for install

// The next ***command*** intalls a package as global dependency to use it in any project
// npm install -g <packageName>
// sudo npminstall -g <packageName> ( for mac users)

// installing packages globally, it causes conflict
// b/c every project would have that package.
// npx test if the executable package is in our project and
// if it's no there, npx downloads the latest version, and then runs it.
// You can check more info. about this at: https://codersera.com/blog/npx-vs-npm-a-comparison/

// package.json - manifest file (stores important info. about project/package)
// There are three ways of creating package.json file:
// manual approach (create package.json in the root, create properties, etc.)
// the other two ways are automate by using the next ***commands:***
// npm init (step by step it'll ask you the questions, press enter to skip a question)
// npm init -y (to set everything as default) // "-y" is a flag

// After you create the package.json using any of the above methods, you can change its values (property values) manually.

// Why do we need a package.json file? Because we need to provide information about our project, and
// within that file a "dependencies" property is created when we intall the first package, and the info.
// of the package is stored in the dependencies object, such as the name of the package and its version. For the next
// installations of packages will continue to be stored in the dependencies object.
// This info. (specially the dependencies object) will be very useful for other developers when you upload a project at github, because they will look at
// at this file to know that these packages need to be installed to make work this project in their computers. 
// The dependencies object only contains info. about the packages because the actual packages are
// installed in a file called "node_modules", and you need to block this file(because it's too heavy), so that is not included when you upload the
// project to a github.

// Question to solve later? If you are going to publish the package, you need to make sure nowhere in the npm you see the
// package with the same name.
// What happens is that "package.json" contains a "name" property, and that "name" property copies the name its parent folder (which is the folder that 
// contains the project).

// As an example, we are going to download a utility package call "lodash"
// Now, we can use the package "lodash" installed in the "node_modules"
// Since the physical (actual) packages are stored in the "node_modules", we need to
// create a file ".gitignore" ( and type "/node_modules" in it) to ignore this file (b/c packages are too heavy), and
// when uploading (push up) this project to a Github repository, these files will not
// be included(this task is done by the source control which won't include this files for uploading). However, when other developers download (pull down) this project, 
// Nodejs will detect that these packages are not there and download them when the project (a file) is run.

// To upload (push up) a project to a Github repository, we need to:
// Sign up Github on the browser, find a tab called "Repositories", click on it; then you will see a button called "New", click on it to create a repository. A new will window will open, and
// type a name of the repository, and click create repository button. A new page is created diplaying commands to upload (push up) in this repository, copy
// the one that says "…or push an existing repository from the command line"; in there it will be include your Github's url with the name of the repository you created.

// in the nodejs terminal type:

// then paste the commands that you copied when you created the repository.
const _ = require('lodash')
// This is a multi-dimensional array (which it's arrays nested)
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);//[ 1, 2, 3, 4 ]

// last resume from video: 2:03:00 
// https://careerkarma.com/blog/git-nothing-to-commit-working-directory-clean/


















