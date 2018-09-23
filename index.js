// https://shielded-falls-26186.herokuapp.com/ |
// https://git.heroku.com/shielded-falls-26186.git

// git push heroku master
// heroku logs
const express = require("express");
const app = express();

require("./services/passport");
require("./routes/authroutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
