const path = require('path');
console.log(__dirname);
console.log(path.join(__dirname, "main.js"));

console.log(__dirname + "/index.js");

console.log(path.join(__dirname, "../../index.js", "/projects", "/index.js"));