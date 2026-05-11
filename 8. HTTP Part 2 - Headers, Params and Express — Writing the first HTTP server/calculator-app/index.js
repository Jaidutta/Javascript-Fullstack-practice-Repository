const express = require("express");

const app = express();
let requestCount = 0;

function middleware(req, res, next) {
    requestCount++; // increment the request count for every incoming request
    next();
}

// middleware function will not be executed for this route because it is defined before the middleware is called but it will be executed for all routes that comes after the middleware function is called 

app.get("/requestCount", function (req, res) {
    res.send({
        requestCount
    });
});

app.use(middleware); // apply the middleware to all routes
app.use(express.json()); // to parse JSON request bodies

// middleware applied using app.use() will be executed for all routes that comes after it is called. So, it will be executed for all routes defined after this line of code.

const path = require("path");
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});



// 2nd way to apply middleware to a specific route is to pass it as an argument to the route handler. This way, the middleware will only be executed for this specific route.
app.get("/status", middleware, function (req, res) {
    res.send("up");
});


/*
// Example of query params 

// http://localhost:3002/sum?a=1&b=2
app.get("/sum", function(req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  
  // send the sum as a JSON response
  // res.json({ sum });

  // Send the sum as an HTML response
  res.send(`<b><u> The sum of ${a} + ${b}: ` + sum.toString() + "</u></b>");
});
*/


/*
// Example of request body 

// http://localhost:3002/sum
app.post("/sum", function(req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  const sum = a + b;
  
  // send the sum as a JSON response
  // res.json({ sum });

  // Send the sum as an HTML response
  res.send(`<b><u> The sum of ${a} + ${b}: ` + sum.toString() + "</u></b>");
});
*/


// request with params: http://localhost:3002/sum/1/2
// Example request: http://localhost:3002/sum/12000/2
app.get("/sum/:a/:b", function(req, res) {
    const a = parseInt(req.params.a); // string 1
    const b = parseInt(req.params.b); // string 2

    const sum = a + b;

    res.json({
        ans: sum
    });
});

app

app.get("/multiply/:a/:b", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const product = a * b;
    res.json({
        ans: product
    });
});

app.get("/divide/:a/:b", function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    if (b === 0) {
        res.status(411).json({
            messge: "Division by zero is not allowed"
        });
    } else {
        const quotient = a / b;
        res.json({
            ans: quotient
        });
    }
});

app.get("/subtract", function(req, res) {

});

app.listen(3002);