verification_html = "google-site-verification: google63e4200fdfdd534f.html";

module.exports = app => {
	app.get("/google63e4200fdfdd534f.html", (req, res) => {
		res.send(verification_html);
	});
};
