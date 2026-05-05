const fs = require("fs");
function cleanManyFiles(prefix) {
  return new Promise(async function(resolve, reject) {
    try {
      await cleanFile(prefix + "1.txt");
      await cleanFile(prefix + "2.txt");
      await cleanFile(prefix + "3.txt");
      resolve();
    } catch (e) {
      reject();
    }
  });
}

function cleanFile(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, contents) {
      if (err) {
        reject();
      } else {
        const trimmedContents = contents.trim();
        fs.writeFile(filePath, trimmedContents, function(err) {
          if (err) {
            reject();
          } else {
            resolve();
          }
        });
      }
    });
  });
}

cleanManyFiles("a")
  .then(function() {
    console.log("all files have been cleaned");
  })
  .catch(function() {
    console.log("error while reading files");
  });