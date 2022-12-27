const express = require("express");
const dotenv = require("dotenv");
const { payPayment, saveIpn, checkTransactionStatus } = require("../controllers/payment");
const { verifyUser } = require("../utils/verify.js");
const { createHmac } = require("crypto");
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

// Return callback
router.get("/callback/:id", checkTransactionStatus);

// Save IPN
router.post("/ipn", saveIpn);

// Do transaction
router.post("/pay/:id", payPayment);

module.exports = router;
