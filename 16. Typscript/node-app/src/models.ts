import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = {
    UserModel
}  // method 1 to export

// export { UserModel } // method 2 to export

// when one thing is exported we use export default UserModel; 