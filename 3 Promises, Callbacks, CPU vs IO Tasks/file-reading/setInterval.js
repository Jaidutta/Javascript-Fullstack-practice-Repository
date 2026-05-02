let count = 0;

function printCountEverySecond() {
  console.log(count);
  count++;
}

setInterval(printCountEverySecond, 1000);