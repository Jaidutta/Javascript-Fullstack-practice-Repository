const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8")
console.log(contents)

for (let i = 0; i < 100; i++) {
  // Loop logic
}


// Asynchronous code
function afterFileIsRead(err, contents) {
  console.log(contents);
}

fs.readFile("a.txt", "utf-8", afterFileIsRead);

////////// ASYNCHRONOUS CODE //////////

function callback() {
  console.log("hi there");
}

setTimeout(callback, 5 * 1000);

let ctr = 0;
for (let i = 0; i < 1000; i++) {
  ctr = ctr + i;
}

console.log(ctr);

// Promises
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeoutPromisified(5 * 1000).then(callback);


/*  
  class Promise {

    constructor() {}

    then() {

    }

    catch() {

   }
  }

  // The above code is a very simplified version of the Promise class how a    Promise might be implemented in JavaScript. 
*/

// Non-Promisified version of setTimeout 


function callback1(err, data) {
  if (err) {
    console.log("error while reading the file");
  }
  console.log(data);
}

fs.readFile("a.txt", "utf-8", callback1);

// Promisified version of FileRead 

function fsReadFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })

}

fsReadFilePromisified("a.txt", "utf-8")
    .then(  data => console.log(data))
    .catch(err => console.log("error while reading the file"))