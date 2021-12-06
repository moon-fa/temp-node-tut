const path = require('path')

console.log(path.sep) // only one separator "\"

// "join" will add "\" to all folders until reaching the file
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath) // \content\subfolder\test.txt

// sometimes, it's needed only the base (which it's directly (only) the file)
const base = path.basename(filePath)// test.txt
console.log(base)

// To get the absolute path:
// "resolve" builds the the path and "__dirname" adds all the initial path where "content/subfolder/text.txt" is located
// "__dirname" is very useful b/c can be used in the different platarms where the file is located such as gighut, heroku, locally (in your machine) etc. 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute); //C:\Users\yeso\Desktop\tutorial\content\subfolder\text.txt
