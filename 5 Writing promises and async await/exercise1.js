const fs = require("fs");

function cleanFileSync(filePath) {
  const contents = fs.readFileSync(filePath, "utf-8");
  const trimmedContents = contents.trim();
  fs.writeFileSync("y.txt", trimmedContents);
}

cleanFileSync("z.txt");