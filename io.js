var fs = require("fs");

// All synchronous filesystem methods end with "Sync"
// To read a file, you'll need to use fs.readFileSync("path/to/file")
// Buffer objects are Node's way of efficiently representing arbitrary arrays of data
// Buffer objects can be converted into strings by calling toString(), for example var str = buf.toString();

// take the second input from process.argv  (first is "node", second is "path/to/file") since we want the file to be loaded using filesystem
//

var breaks = 0;

var file = fs.readFileSync("process.argv[1]");
breaks = file.toString().split("\n").length;


console.log(breaks);
