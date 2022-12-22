const express = require("express");
const dotenv = require("dotenv");
const { payPayment } = require("../controllers/payment");
const { verifyUser } = require("../utils/verify.js");
const { createHmac } = require('crypto');
const { createError } = require("../utils/error");
const router = express.Router();

dotenv.config();

const MOMO_ACCESS_KEY = process.env.MOMO_ACCESS_KEY;
const MOMO_SECRET_KEY = process.env.MOMO_SECRET_KEY;

// Check MOMO test app
router.get("/", (req, res) => {
	res.json({
		message: "Momo test app",
	});
});

function verifySignature(data) {
	const message = `accessKey=${MOMO_ACCESS_KEY}&amount=${data.amount}&extraData=${data.extraData}&message=${data.message}&orderId=${data.orderId}&orderInfo=${data.orderInfo}&orderType=${data.orderType}&partnerCode=${data.partnerCode}&payType=${data.payType}&requestId=${data.requestId}&responseTime=${data.responseTime}&resultCode=${data.resultCode}&transId=${data.transId}`;
	const signature = createHmac("sha256", MOMO_SECRET_KEY)
		.update(message)
		.digest("hex");
	if (data.signature !== signature) {
		throw Error("Momo signature is invalid");
	}
}

// Return callback
router.get("/callback", (req, res, next) => {
	try {
		const data = req.query;
		verifySignature(data);
		console.log("Callback:", data);
		res.json(data);
	} catch (err) {
		if (err.message === "Momo signature is invalid") {
			next(createError(404, err));
		} else {
			next(err);
		}
	}
});

// Save IPN
router.post("/ipn", (req, res, next) => {
	try {
		const data = req.body;
		verifySignature(data);
		console.log("IPN:", data);
		res.json(data);
	} catch (err) {
		if (err.message === "Momo signature is invalid") {
			next(createError(404, err));
		} else {
			next(err);
		}
	}
});

// Do transaction
router.post("/pay/:id", verifyUser, payPayment);


module.exports = router;
