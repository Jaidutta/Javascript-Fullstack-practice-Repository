require('dotenv').config();

const mongoose = require("mongoose");

// connect to mongodb cluster
mongoose.connect(process.env.MONGO_URI)
console.log("Your URI is:", process.env.MONGO_URI);
// create schemas
const userSchema = mongoose.Schema({
  username: String, 
  password: String
})

const organizationSchema = mongoose.Schema({
  title: String,
  description: String,
  admin: mongoose.Types.ObjectId , // userId
  members: [mongoose.Types.ObjectId]   // userId
})

const userModel = mongoose.model("users", userSchema);
const organizationModel = mongoose.model("organizations", organizationSchema);

module.exports = {
  userModel: userModel,
  organizationModel: organizationModel
}
