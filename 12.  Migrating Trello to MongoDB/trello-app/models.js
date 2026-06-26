const mongoose = require("mongoose");

// connect to mongodb cluster
mongoose.connect("mongodb+srv://duttajoy_db_user:Hello1World2@mongodbapps.oz2pgyv.mongodb.net/projectPulseDB")

// create schemas

const userSchema = mongoose.Schema({
  username: String, 
  password: String
})

const organzationSchema = mongoose.Schema({
  title: String,
  description: String,
  admin: mongoose.Types.ObjectId , // userId
  members: [mongoose.Types.ObjectId]   // userId
})

const userModel = mongoose.model("users", userSchema);
const organizationModel = mongoose.model("organizations", organzationSchema);

module.exports = {
  userModel: userModel,
  organizationModel: organizationModel
}
