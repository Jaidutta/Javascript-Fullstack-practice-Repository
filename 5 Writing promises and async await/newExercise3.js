async function cleanManyFiles(prefix) {
  await cleanFile(prefix + "1.txt");
  await cleanFile(prefix + "2.txt");
  await cleanFile(prefix + "3.txt");
}
// we have never returned a promise from this function but when we call this funciton with then and catch, it works. 

cleanManyFiles("a");

// If we want to create an async function on top of other async functions, it is very easy. Similarly, if we want to create a promise based function on top of other promise based functions, it is also very easy.  

// When you want to create a promisified function on top of other non-promisified functions, then it becomes difficult. Look at exercise3.js for an example of how to create a promisified function on top of other non-promisified functions. There we call resolve and reject 

// The above function is the same as 
function cleanManyFiles(prefix) {
  return new Promise(function(resolve, reject) {
    cleanFile(prefix + "1.txt")
      .then(function() {
        cleanFile(prefix + "2.txt")
          .then(function() {
            cleanFile(prefix + "3.txt")
              .then(function() {
                resolve();
              })
          })
      })
      .catch(function() {
        reject();
      })
  })
}