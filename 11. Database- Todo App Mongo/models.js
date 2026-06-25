const mongoose = require("mongoose");

// mongoose schema and model object


// mongoose.connect("mongodb+srv://UserName:Password@mongodbapps.xyz.mongodb.net/")  // this will end up in test db, so we add the db name in the url as shown below: todo is the db name

mongoose.connect("mongodb+srv://UserName:Password@mongodbapps.xyz.mongodb.net/todo")

const UserSchema = new mongoose.Schema({
  username: String, 
  password: String
})

const TodoSchema = new mongoose.Schema({
  title: String, 
  description: String,
  userId: mongoose.Types.ObjectId
})


const userModel = mongoose.model("users", UserSchema);
const todoModel = mongoose.model("todos", TodoSchema);

module.exports = {
  userModel,
  todoModel
}