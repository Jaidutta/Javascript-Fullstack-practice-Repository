// json : javascript object notation

const users = {
    name: "harkirat",
    age: 24,
    gender: "male",
}

console.log(users["name"])

// if we convert that to a string, it is easier to send over the network
const users = '{"name": "harkirat","age": 24,"gender": "male"}';

// JSON.parse
// JSON.stringify converts this to 

const user = JSON.parse(users);
console.log(user["gender"]);