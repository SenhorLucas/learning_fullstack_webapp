const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.google_client_ID,
			clientSecret: keys.google_client_secret,
			callbackURL: "/auth/google/callback"
		},
		(accessToken, refreshToken, profile, done) => {
			console.log("access token: ", accessToken);
			console.log("refresh token: ", refreshToken);
			console.log("profile: ", profile);
		}
	)
);
