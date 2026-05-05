const fs = require("fs");

function cleanFile(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, contents) {
      if (err) {
        reject();
      } else {
        const trimmedContents = contents.trim();
        fs.writeFile("p.txt", trimmedContents, function(err) {
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

cleanFile("z.txt")
  .then(function() {
    console.log("file has been cleaned");
  })
  .catch(function() {
    console.log("error while cleaning file");
  });