// fetch is available in Node.js runtime and in browsers, so we can use it directly without any imports
// wherelse we would would need to install and import a library like axios

const axios = require("axios");

// There are 2 main ways to use fetch, with then/catch syntax or with async/await syntax. 

// Fetch method 1: using then/catch syntax
// Fetch example with then/catch syntax
function main() {
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async (response) =>
      {
         const json = await response.json();
         console.log(json.todos.length);
      })
}


// Fetch method 2: using async/await syntax
// fetch example with async/await syntax
async function main() {
    const response = await fetch("https://sum-server.100xdevs.com/todos");
    const json = await response.json();
    
    // Logs the number of items in the 'todos' array
    console.log(json.todos.length);
}
main();

// AXIOS example
async function main() {
    // Axios handles the JSON parsing automatically under the .data property
    const response = await axios.get("https://sum-server.100xdevs.com/todos");
    
    // The actual response body is located in response.data
    console.log(response.data.todos.length);
}

main();


const axios = require("axios");


// POST method for fetch with async/await syntax
async function main1() {
    const response = await fetch(
        "https://httpdump.app/dumps/c8ad7fcb-c9e7-44d9-8660-9945253fdb34",
        {
            method: "POST",
            headers: {
                "Authorization": "Bearer 123"
            }
        },
    );
    const textualData = await response.text();
    console.log(textualData);
}

main1();

// POST  method for axios 

// 1st part request method
// 2nd part send body
// 3rd part send headers

// In a get request, the 2nd argument is the headers, but in a post request, the 2nd argument is the body and the 3rd argument is the headers. This is because in a get request, there is no body to send, so the headers are sent as the second argument. In a post request, there is a body to send, so the headers are sent as the third argument. It is the same for other HTTP methods like PUT, DELETE, etc. The body is only sent in POST and PUT requests, so the headers are sent as the third argument in those cases. In GET, DELETE, etc., the headers are sent as the second argument because there is no body to send. This is just how the axios library is designed to handle different HTTP methods and their respective requirements for body and headers.

async function main2() {
    const response = await axios.post(
        "https://httpdump.app/dumps/c8ad7fcb-c9e7-44d9-8660-9945253fdb34", 
        {
            username: "harkirat",
            password: "1234567",
        },
        {
            headers: {
                Authorization: "Bearer 123",
            },
        },
    );
    console.log(response.data);
}

// an alternative way to write axios request without specifying the method in the function name, but instead specifying it in the config object
async function main3() {
    // request config
    const response = await axios(
        {
            url: "https://httpdump.app/dumps/c8ad7fcb-c9e7-44d9-8660-9945253fdb34?a=b",
            method: "POST",
            headers: {
                Authorization: "Bearer 123",
            },
            data: {
                username: "harkirat"
            },
        },
    );
    console.log(response.data);
}

main3();