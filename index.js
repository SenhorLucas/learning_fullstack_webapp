const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookie_session = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

mongoose.connect(
  keys.mongo_uri,
  { useNewUrlParser: true }
);

app.use(bodyParser.json());

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
require("./routes/billingroutes")(app);
require("./routes/google_domain_verification")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
