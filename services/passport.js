const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("User");

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.google_client_ID,
			clientSecret: keys.google_client_secret,
			callbackURL: "/auth/google/callback"
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
