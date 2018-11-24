const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

module.exports = (app) => {
  app.get("api/surveys", requireCredits, requireLogin, (req, res) => {});
};
