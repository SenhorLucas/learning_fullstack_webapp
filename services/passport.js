const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("User");

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((user_id, done) => {
	User.findById(user_id).then(user => {
		done(null, user);
	});
});

if (process.env.NODE_ENV === "production") {
}
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.google_client_ID,
			clientSecret: keys.google_client_secret,
			callbackURL: getCallbackRoute(),
			proxy: true
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ google_id: profile.id }).then(existingUser => {
				if (existingUser) {
					done(null, existingUser);
				} else {
					new User({ google_id: profile.id })
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);

function getCallbackRoute() {
	const callback_route = "";
	if (process.env.NODE_ENV === "production") {
		callback_route =
			"https://shielded-falls-26186.herokuapp.com/auth/google/callback";
	} else if (process.env.NODE_ENV === "development") {
		callback_route = "/auth/google/callback";
	} else {
		console.log("production or development environment not found");
	}
	return callback_route;
}
