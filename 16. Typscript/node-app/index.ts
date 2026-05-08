// simple types: Number, String, Boolean

function greet(name: string) {
    return `Hello, ${name}!`;
}

function sum(a: number, b: number): number {
    return a + b;
}

let x = 10; // inferred as number
let y = 20;

let ans = sum(x, y);


// write a function first_element

// that takes an array as input,

// returns the first element if it exists.

// if it doesnt exist, then returns null

function first_element(arr: number[]): number | null {
   // return type denoted by : after the function name is composite: i.e. it can be either number or null
    if (arr.length > 0) {
        return arr[0] ?? null;
    }
    return null; // | null
}

let el = first_element([]);

let a: number | string = 10; // a is a composite type that can be either number or string
a = "hello"; // valid assignment



function isLegal(age: number) {
  // INFERRED return type is boolean
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}


// function as input for which there is argument and return type is void
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})


interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}

function isLegal1(user: User): boolean {
    if (user.age > 18) {
        return true;
    }
    return false;
}

let user1: User = {
    firstName: "harkirat",
    lastName: "Singbh",
    email: "harkoirat@gmail.com",
    age: 11
};

console.log(isLegal1(user1)); // Output: false