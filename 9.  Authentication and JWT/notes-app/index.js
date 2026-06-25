path = require('path');
const express = require('express');
const app = express();
const { authMiddleware } = require('./middleware/authenticate');
app.use(express.json()); // This is needed to parse JSON bodies in POST requests

const jwt = require('jsonwebtoken'); // This is needed to create and verify JWT tokens.

const notes = []; // This is bad but eventually we will use a databases like MongoDB, Postgres, MySQL, etc.
// The way it is being stored right now, if we restart the server, all the notes will be lost. This is because they are stored in the memory of the server and not in a persistent storage like a database. We will look into file storage and followed by databases in the upcoming sections.

/*
// This time the note object inside the notes array will be of this structure
[ 
    {
        username: "joyduttauk",
        note: "go to gym"
    },
    {
        username: "raman",
        note: "buy groceries for the week"
    },
    {
        username: "jai",
        note: "finish the backend middleware logic"
    }
]
*/

// replicate a users table in a database with an array of objects. Each object represents a user with a username and password.
const users = [
  {
    username: 'jaiduttauk',
    password: '123123',
  },
  {
    username: 'raman',
    password: '321321',
  },
  {
    username: "krsnadutta",
    password: "123321"
  }
];

app.get('/signup', function (req, res) {
  res.sendFile(path.join(__dirname, 'frontend', 'signup.html'));
});

app.get('/signin', function (req, res) {
  res.sendFile(path.join(__dirname, 'frontend', 'signin.html'));
});

app.post('/signin', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // Check if a user with this username AND password exists in the array/db. For this example we are using an array
  const userExists = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (!userExists) {
    res.status(403).json({
      message: 'Incorrect credentials',
    });
    return;
  }

  // json web tokens
  // Once the user is authenticated, we will sign a token with the username and a secret key ("joydutta123")
  const token = jwt.sign(
    {
      username: username,
    },
    'jaidutta123',
  );

  res.json({
    token: token,
  });
});



app.post('/signup', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const userExists = users.find((user) => user.username === username);

  if (userExists) {
    return res.status(403).json({
      message: 'User with this username already exists',
    });
  }
  users.push({
    username: username,
    password: password,
    //  it is similar to writing username: username, password: password
    //  This is a shorthand syntax in JavaScript when the key and the value have the same name.
  });

  res.json({
    message: 'Sign up completed successfully',
  });
});

// POST  to create a new note -- AUTHENTICATED ENDPOINT
app.post('/notes', authMiddleware, function (req, res) {
  const username = req.username; // we can access the username that we attached to the request object in the auth middleware.
  
  const note = req.body.note;

  notes.push({
    username,
    note,
  });

  // mongoDB.store(notes); store the note in the database

  res.json({
    message: 'Note created successfully',
  });
});

// GET to get/retrieve all notes  -- AUTHENTICATED ENDPOINT
app.get('/notes', authMiddleware, function (req, res) {
  const username = req.username; // we can access the username that we attached to the request object in the auth middleware.
  
  // filter the notes array and return only the notes that belong to this user. In a real application, we would do this filtering in the database query itself.
  const userNotes = notes.filter((note) => note.username === username);

  res.json({
    notes: userNotes,
  });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(3000);
