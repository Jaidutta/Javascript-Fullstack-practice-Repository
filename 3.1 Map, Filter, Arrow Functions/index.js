function sum(a,b){
    return a+b;
}

// arrow function
const sum = (a,b) => a+b;


app.get("/", (req, res) => {
    // Your code goes here
})

app.get("/", function(req, res) {
    // Your code goes here
})

// given an array, give me back a new array in which every value is multiplied by 2"

// For example:

// Input: [1, 2, 3, 4, 5]

// Output: [2, 4, 6, 8, 10]

const arr = [1, 2, 3, 4, 5]; 
const newArr = [];
for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i] * 2);
}

function transformArray(element){
  return element * 2;
}

const doubledArr1 = arr.map(transformArray);

 const doubledArr2 = arr.map(function(element){ 
  return element * 2; 
});

// Solution using map and arrow function
const doubledArr = arr.map(num => num * 2);


// filter  
// Given an array of numbers, return a new array that only contains the even numbers.

// For example: 
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]
const arr = [1, 2, 3, 4, 5, 6];
const evenArr = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        evenArr.push(arr[i]);
    } 
}



// using filter and a transform function
function isEven(num){
    return num % 2 === 0;
} 

const evenNumbers = arr.filter(isEven);

// using filter and an anonymous function
const evenNumbers2 = arr.filter(function(num){
    return num % 2 === 0;
});

// using filter and an arrow function
const evenNumbers3 = arr.filter(num => num % 2 === 0);