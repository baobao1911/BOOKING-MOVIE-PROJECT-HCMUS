const jwt = require("jsonwebtoken");
const { createError } = require("./error.js");

const verifyUser = (req, res, next) => {
	// Get token from cookie
	const token = req.cookies.access_token;

	// Check if token exists
	if (!token) {
		return next(createError(401, "You are not authenticated!"));
	}

	// Check if token is valid
	jwt.verify(token, process.env.JWT, (err, user) => {
		if (err) return next(createError(403, "Token is not valid!"));

		// Check if the user is authenticated
		req.user = user;
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			return next(createError(403, "You are not authorized!"));
		}
	});
};

const verifyAdmin = (req, res, next) => {
	// Get token from token
	const token = req.cookies.access_token;

	// Check if token exists
	if (!token) {
		return next(createError(401, "You are not authenticated!"));
	}

	// Check if token is valid
	jwt.verify(token, process.env.JWT, (err, user) => {
		if (err) return next(createError(403, "Token is not valid!"));

		// Check if the user is authenticated
		req.user = user;
		if (req.user.isAdmin) {
			next();
		} else {
			return next(createError(403, "You are not authorized!"));
		}
	});
};

module.exports = { verifyUser, verifyAdmin };
