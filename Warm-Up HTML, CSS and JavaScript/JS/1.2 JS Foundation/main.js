let a = 1;
a = 2;
console.log(a);

let name = "Joy";
let age = 18;
let isMarried = false;

console.log(`This person's name is ${name} and his age is ${age}`)

/////////////////////// if else ///////////////////////////

if(isMarried) {
  console.log(`${name} is married`);
  
}
else {
  console.log(`${name} is unmarried`);
}

/////////////////////////// LOOP //////////////////////////

let answer = 0
for(let i = 1; i <= 100; i++) {
  answer = answer + 1;
}
console.log(answer);

// arrays
let person1 = "Joy"
let person2 = "Kirat"
let person3 = "Holly"

const people = ["Joy", "Kirat", "Holly"];
console.log(people[0]);
console.log(people[1]);
console.log(people[2]);

const ages = [21, 22, 23, 24, 25]


// print even age
for(let i = 0; i < ages.length; i++) {
  if(ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}

// object
let person5 = "Joy"
let gender5 = "Male"

let person6 = "Joy"
let gender6 = "Female"

const personArray = ["Joy", "Kirat", "Kiara"]
const genderArry = ["male", "male", "female"]
let totalUsers = personArray.length

for (let i = 0; i < totalUsers; i++) {
  if(genderArry[i] == "female") {
    console.log(personArray[i]);
    
  }
  
}

const user1 = {
  firstName : "Joy",
  lastName: "Dutta",
  gender: "male"
}

// accessing properties
console.log(`user1 firstName: ${user1["firstName"]}`);


const allUsers = [
  { firstName: "Kirat", 
    gender: "male"
  },
  {
    firstName: "Joy", 
    gender: "male"
  },
  {
    firstName: "Kiara", 
    gender: "female",
    metadata: {
      age: 18, 
      address: "West Bromwich"
    }
  }
]

for (let index = 0; index < allUsers.length; index++) {
  if(allUsers[index]["gender"] === "female") {
    console.log("firstName: " + allUsers[index]["firstName"]);
    
  }
  
}

// function 

function sum(num1, num2) {
   let ans = num1 + num2
   displayResult(ans)
}
console.log(sum(1, 3));


function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
const ans = sum(1, 2);

displayResult(ans)

sum(5, 10)


// callback function: a function that is an argument to another function
function add(num1, num2, fnToCall) {
  let result = num1 + num2;
  fnToCall(result)
}

add(2, 3, displayResult)
add(3, 2, displayResultPassive)

function calculateArithmetic(a, b, type) {
    if (type == "sum") {
        return a + b;
    }
    if (type == "minus") {
        return a - b;
    }
}

const value = calculateArithmetic(1, 2, "minus");
console.log(value);

function calculateArithmetic1(a, b, type) {
    if (type == "sum") {
        const value = sum1(a, b);
        return value;
    }
    if (type == "minus") {
        const value = sub2(a, b);
        return value;
    }
}

function sum2(a, b) {
    return a + b;
}

function sub2(a, b) {
    return a - b;
}

function calculateArithmetic2(a, b, arithmeticFinalFunction) {
    const ans = arithmeticFinalFunction(a, b);
    return ans;
}
function sum3(a, b) {
    return a + b;
}

function sub3(a, b) {
    return a - b;
}
const value2 = calculateArithmetic2(1, 2, sum3);
console.log(`The value is: ${value2}`);

// setTimeout function

function greet() {
  console.log("Hello world")
}

function greetAlien() {
  console.log("Hello to the Allien Fraternity");
  
}

setTimeout(greet, 3 * 1000)
setTimeout(greetAlien, 3 *1000)

setInterval(greet, 1000)