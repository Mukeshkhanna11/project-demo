const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: { type: string, required: true },
  username: { type: string, required: true, unique: true },
  password: { type: string, required: true },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
