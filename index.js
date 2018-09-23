// https://shielded-falls-26186.herokuapp.com/ |
// https://git.heroku.com/shielded-falls-26186.git

// git push heroku master
// heroku logs
const express = require("express");
const app = express();
const keys = require("./config/keys");
const mongoose = require("mongoose");

mongoose.connect(keys.mongo_uri);

require("./models/users.js");
require("./services/passport");
require("./routes/authroutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
