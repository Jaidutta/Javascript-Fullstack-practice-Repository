let firstName = "Joy";
console.log("hello " + firstName);
console.log("namaste " + firstName);
console.log("How has you day been " + firstName);

let firstName1 = "raman";
console.log("hello " + firstName1);
console.log("namaste " + firstName1);
console.log("How has you day been " + firstName1);

let firstName2 = "kirat";
console.log("hello " + firstName2);
console.log("namaste " + firstName2);
console.log("How has you day been " + firstName2);

// function  
function greet(nameOfPerson) {
  console.log("hello " + nameOfPerson);
  console.log("namaste " + nameOfPerson);
  console.log("How has you day been " + nameOfPerson);
}

let firstName3 = "Joy";
let firstName4 = "raman";
let firstName5 = "kirat";

greet(firstName3);
greet(firstName4);
greet(firstName5);


// conditionals 
function isLegalAge(age) {
  return age >= 18;
}

isLegalAge(17); // false
isLegalAge(18); // true
isLegalAge(19); // true

// loop
for (let i = 1; i <= 100; i++) {
  isLegal(i);
}


function isLegal(name, age) {
    if (age >= 18) {
        console.log(name + " is allowed to vote");
    } else {
        console.log(name + " is not allowed to vote");
    }
}

isLegal("Joy", 17);

// objects
var user1 = {
  name: "Joy",
  age: 17,
  password: "e65t5t563"
}

var user2 = {
  name: "ramanjeet",
  age: 32,
  password: "e65t5t563"
}

// 
var user3 = {
    name: "harkirat",
    age: 17,
    password: "e65t5t563",
    address: {
        city: "chd"
    },
    metadata: {
        likes: "girls"
    }
};
var user4 = {
  name: "ramanjeet",
  age: 32,
  password: "e65t5t563",
  address: {
        city: "chd"
    },
    metadata: {
        likes: "boys"
    }
}

isLegal(user3.name, user3.age)
isLegal(user4.name, user4.age)

// we can also pass the whole object to the function and access the properties inside the function
function isLegalwithObject(user) {
    if (user.age >= 18) {
        console.log(user.name + " is allowed to vote");
    } else {
        console.log(user.name + " is not allowed to vote");
    }
}

isLegalwithObject(user3.name, user3.age)
isLegalwithObject(user4.name, user4.age)

console.log(user3.metadata.likes);
console.log(user4.metadata.likes);

// Arrays
let userx = "Joy";
let usery = "raman";
let userz = "kirat";
const users = ["Joy", "raman", "kirat"];

// 0 based indexing
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

for(let user of users) {
    console.log(user);
}

// arrays and objects together
const users1 = [
  {
    name: "Joy",
    age: 33,
    password: "123random",
    addresses: [
        {
            city: "chd",
            building: 60,
            pincode: 123455
        },
        {
            city: "delhi",
            building: 60,
            pincode: 777777
        },
    ]
  },
  {
    name: "raman",
    age: 38,
    password: "125random",
    addresses: []
  },
   
  {
    name: "krsna",
    age: 3,
    password: "124random",
    addresses: []
  }
];

console.log(users1[0].name);
console.log(users1[1].name);
console.log(users1[2].name);

console.log(users[0]?.addresses?.[0]["city"]);  // ? should always be used before the dot


// Question from the exercise

const users2 = [{
    name: "harkirat",
    age: 22
}, {
    name: "raman",
    age: 23
}, {
    name: "kirat",
    age: 12
}]


function isLegalUser(user) {
  legalUser = [];
  for(let user of users2) {
    if(user["age"] >= 18) {
      legalUser.push(user);
    }
  }
  return legalUser;
}
console.log(isLegalUser(users2));