// create a promisified version of fs.readFile on top of the callback version of fs.readFile

// create a promisified version of setTimeout
// create a promisified version of fs.writeFile

const fs = require("fs");
function promisifiedReadFile(filePath, encoding) {
  return new Promise(function(resolve, reject) 
  // promise constructor takes a function as an argument, that function takes two arguments, resolve and reject, which are functions that we can call to either resolve the promise with a value or reject the promise with an error
  {
    fs.readFile(filePath, encoding, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  })
}

/*
somebody who wrote the promise library would have written something like this:
class Promise {
  constructor(fn) {

    fn(function() {

    }, function() {

    })
  }
}
  */
promisifiedReadFile("a.txt", "utf-8")
  .then(function(data) { // whenever the promise is resolved, the then function is called with the resolved value as an argument
    console.log(data);  
  })
  .catch(function(err) { // whenever the promise is rejected, the catch function is called with the rejected error as an argument
    console.log("Error while reading file");
  });

// RULE: The promisified version will have 1 less parameter than the callback version, because the callback function is replaced by the promise's resolve and reject functions. So if the callback version has n parameters, the promisified version will have n-1 parameters. In the promisified version we NEVER pass the callback function as an argument


// Promoisified version of setTimeout
function promisifiedSetTimeout(delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve();
    }, delay);
  })
}

promisifiedSetTimeout(2000)
  .then(function() {
    console.log("Timeout completed");
  })
  .catch(function(err) {
    console.log("Error while setting timeout");
  })
  .finally(function() {
    console.log("This will always be executed");
  }) // the finally function is called regardless of whether the promise is resolved or rejected, and it does not receive any arguments

  function fsReadFilePromisified(filePath, encoding) {
    return new Promise(function(resolve, reject) {
      fs.readFile(filePath, encoding, function(err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
     })
   })
  }

  // There are two ways to call it, 
  // 1. either using then and catch, 
  // 2. or using async/await 


// If we wanted to read 3 files a.txt, b.txt and c.txt on after anothere, we would have to use nested then functions, which is not very readable and leads to callback hell. Instead, we can use async/await to make the code more readable and avoid callback hell.

async function main() {
  fsReadFilePromisified("a.txt", "utf-8")
    .then(function(data) {
      console.log(data);
      fsReadFilePromisified("b.txt", "utf-8")
        .then(function(data) {
          console.log(data);
          fsReadFilePromisified("c.txt", "utf-8")
            .then(function(data) {
              console.log(data);
            })
            .catch(function(err) {
              console.log("Error while reading c.txt");
            }); // Added missing );
        })
        .catch(function(err) {
          console.log("Error while reading b.txt");
        }); // Added missing );
    })
    .catch(function(err) {
      console.log("Error while reading a.txt");
    });
}


// We could use this way if we had to use then  
function main() {
  fsReadFilePromisified("a.txt", "utf-8")
    .then(function(data) {
      console.log(data);
      return fsReadFilePromisified("b.txt", "utf-8"); // Return the next promise!
    })
    .then(function(data) {
      console.log(data);
      return fsReadFilePromisified("c.txt", "utf-8");
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(err) {
      console.log("Something went wrong in the chain:", err);
    });
}

// Using async/await
async function main1() {
  let file1Contents = await fsReadFilePromisified("a.txt", "utf-8");
  let file2Contents = await fsReadFilePromisified("b.txt", "utf-8");
  let file3Contents = await fsReadFilePromisified("c.txt", "utf-8");

  console.log(file1Contents);
  console.log(file2Contents);
  console.log(file3Contents);
}

main1();