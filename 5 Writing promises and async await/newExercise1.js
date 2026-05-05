// write a promisified function that takes a file prefix as an input (a)
// and cleans ({prefix}1.txt), {prefix}2.txt, {prefix}3.txt

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