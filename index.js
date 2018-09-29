const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookie_session = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

mongoose.connect(
	keys.mongo_uri,
	{ useNewUrlParser: true }
);

app.use(
	cookie_session({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookie_key]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require("./models/users.js");
require("./services/passport");
require("./routes/authroutes")(app);
require("./routes/google_domain_verification")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
