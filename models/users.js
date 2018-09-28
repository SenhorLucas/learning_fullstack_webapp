const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	google_id: String
});

mongoose.model("User", userSchema);
