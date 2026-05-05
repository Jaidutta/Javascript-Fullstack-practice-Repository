const fs = require("fs");

function cleanFile(filePath, cb) {
  fs.readFile(filePath, "utf-8", function (err, contents) {
    const trimmedContents = contents.trim();
    fs.writeFile("a.txt", trimmedContents, function () {
      cb();
    });
  });
}

cleanFile("z.txt", function () {
  console.log("done cleaning a.txt");
});