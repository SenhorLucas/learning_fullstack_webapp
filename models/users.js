const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  google_id: String,
  credits: { type: Number, default: 0 }
});

mongoose.model("User", userSchema);
