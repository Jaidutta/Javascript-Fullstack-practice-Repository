/*
What is a function?
  Definition: A function in JavaScript is a set of statements that performs a task or calculates a value.

  Input and Output: It should take some input and return an output where there is some obvious relationship between the input and the output.
*/

function findSum(n) {
  let ans = 0;
  for (let i = 1; i < n; i++) {
    ans = ans + i;
  }
  return ans;
}

// function is a keyword, findSum is the name of the function, return is a keyword indicating the value that would be returned from the function, argument is n

// calling a function
let ans = findSum(100)


// Example 2

function sum(a, b) {
  return a + b;
}


// Why do we need a function? 
// Take a look at the code in loops.js and compare it with this code in function.js. We have written a function to find the sum of first n natural numbers. We can reuse this function whenever we want to find the sum of first n natural numbers. We just need to call the function with different values of n. This is the power of functions. It helps us to write reusable code and makes our code more organized and modular. The code is more reusable with functions. We can call the function with different values of n and get the desired output without writing the same code again and again. This is the main reason why we need functions in programming. It helps us to write clean, organized, and reusable code.

let n = 100;
let ans1 = 0;

for (let i = 1; i < n; i++) {
  ans1 = ans1 + i;
}
console.log(`ans1: ${ans1}`);

let n2 = 1000;
let ans2 = 0;

for (let i = 1; i < n; i++) {
  ans2 = ans2 + i;
}
console.log(ans2);

// with function
function findSum(n) {
  let ans = 0;
  for (let i = 1; i < n; i++) {
    ans = ans + i;
  }
  return ans;
}

let ans3 = findSum(100);
console.log(ans3);

let ans4 = findSum(1000);
console.log(ans4);

// Callback function  
// Step 1:  Can you call one function inside another function? Yes, we can call one function inside another function.

// finds the square of the input
function square(n) {
  return n * n;
}

// finds the sum of the squares of the inputs
function sumOfSquares(a, b) {
  const val1 = square(a);
  const val2 = square(b);

  return val1 + val2;
}

console.log(sumOfSquares(1, 2));


// Preparation for callback function concept
function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSquares(a, b) {
  const val1 = square(a);
  const val2 = square(b);

  return val1 + val2;
}

function sumOfCubes(a, b) {
  const val1 = cube(a);
  const val2 = cube(b);

  return val1 + val2;
}

console.log(sumOfCubes(1, 2));

// In javascript, a function can be passed as an argument to another function. This is called a callback function. A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It is a way to ensure that a certain code is executed only after another code has been executed. This is very useful in asynchronous programming where we want to execute some code only after some other code has been executed.

function square1(a) {
  return a * a
}

function sumOfSomething(a, b, fn) {
  const val1 = fn(a);
  const val2 = fn(b);

  return val1 + val2;
}


// Anonymous functions passed as callback functions, rather than defining a separate function and passing it as an argument, we can directly pass an anonymous function as an argument to the sumOfSomething function. This is a common practice in JavaScript and is often used when we want to perform a simple operation that does not require a separate function definition.
const result = sumOfSomething(3, 4, function(a) {
  return a * a;
});

console.log(result);