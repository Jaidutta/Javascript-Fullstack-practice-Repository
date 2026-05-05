const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data) {
  if (err) {
    console.log("error while reading file")
  } else {
    console.log(data);
  }
})