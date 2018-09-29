// https://shielded-falls-26186.herokuapp.com/ |
// https://git.heroku.com/shielded-falls-26186.git

// git push heroku master
// heroku logs
const express = require("express");
const app = express();
// const mongoose = require("mongoose");
// const cookie_session = require("cookie-session");
// const passport = require("passport");
// const keys = require("./config/keys");

// mongoose.connect(
// 	keys.mongo_uri,
// 	{ useNewUrlParser: true }
// );

// app.use(
// 	cookie_session({
// 		maxAge: 30 * 24 * 60 * 60 * 1000,
// 		keys: [keys.cookie_key]
// 	})
// );

// app.use(passport.initialize());
// app.use(passport.session());

// require("./models/users.js");
// require("./services/passport");
// require("./routes/authroutes")(app);

app.use(express.static("/"));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
