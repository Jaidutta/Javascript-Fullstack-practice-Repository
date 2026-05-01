const currentDate = new Date();
const currentMonth = currentDate.getMonth();
console.log(currentMonth);

const year = currentDate.getFullYear();
console.log(year);


function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

dateMethods()

function calculatSum() {
  let a = 0; // Fixed: Changed 'const' to 'let' because 'a' is reassigned
  for (let i = 0; i < 100000; i++) {
    a = a + i;
  }
  return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

calculatSum();

const afterDate = new Date();
// Fixed: Should call getTime() on 'afterDate' to measure the difference
const afterTimeInMs = afterDate.getTime(); 

console.log(afterTimeInMs - beforeTimeInMs);


// Display time at a regular interval
function currentTimePrint() {
  console.log(new Date().getTime());
}

setInterval(currentTimePrint, 1000);