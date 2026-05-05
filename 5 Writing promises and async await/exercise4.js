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


async function main() {
  try {
    await cleanFile("a.txt");
    console.log("done cleaning the file");
  } catch (e) {
    console.log("error while cleaning the file");
  }
}

main();