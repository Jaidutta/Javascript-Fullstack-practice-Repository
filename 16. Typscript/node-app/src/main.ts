import express from "express";

const app = express();
app.use(express.json());

interface SingupInput {
  username: string;
  password: string;
}

app.post("/signup", (req, res) => {
  const body: SingupInput = req.body; // type annotation for body

 
  res.json({
    message: "User signed up successfully"
  });
});

/*
could not find a declaration file for module 'express'. 'c:/Users/My Account/Downloads/Harkirat Singh/16. Typscript/node-app/node_modules/express/index.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/express` if it exists or add a new declaration (.d.ts) file containing `declare module 'express';`ts(7016)
  It means when the library was wriiten it was written in Javascript. In later version, Typescript was 

  Whenever we see this kind of error, we MUST install that library with 
  bun add @types/express -D
*/