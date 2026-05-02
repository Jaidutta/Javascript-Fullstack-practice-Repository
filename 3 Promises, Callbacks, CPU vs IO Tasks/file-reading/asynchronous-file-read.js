const fs = require("fs");

// error first callback pattern. If there is an error, the first argument will be the error object, otherwise it will be null. The second argument will be the contents of the file if there is no error.
function fileReadCallback(err, contents) {
  console.log(contents);
  console.log(contents);
  console.log(contents);
}

fs.readFile("C:/Users/My Account/Downloads/Harkirat Singh/3 Promises, Callbacks, CPU vs IO Tasks/file-reading/a.txt", "utf-8", fileReadCallback);

let s = 0;
for (let i = 0; i < 100000; i++) {
  s += i;
}

console.log(s);