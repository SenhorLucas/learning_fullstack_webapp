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
		// handleUserRequest
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ google_id: profile.id });
			if (existingUser) {
				return done(null, existingUser);
			}
			const new_user = await new User({ google_id: profile.id }).save();
			return done(null, new_user);
		}
	)
);

// async function handleUserRequest(accessToken, refreshToken, profile, done) {
// 	const existingUser = await User.findOne({ google_id: profile.id });
// 	if (existingUser) {
// 		done(null, existingUser);
// 	} else {
// 		const user = await new User({ google_id: profile.id }).save();
// 		done(null, user);
// 	}
// }

function getCallbackRoute() {
	var callback_route = "";
	if (process.env.NODE_ENV === "production") {
		callback_route =
			"https://shielded-falls-26186.herokuapp.com/auth/google/callback";
	} else {
		callback_route = "/auth/google/callback";
	}
	return callback_route;
}
