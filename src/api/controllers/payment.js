const Payment = require("../models/Payment.js");
const dotenv = require("dotenv");
const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { v4 } = require("uuid");
const { createHmac } = require("crypto");
const { createError } = require("../utils/error.js");

dotenv.config();

const MOMO_PARTNER_CODE = process.env.MOMO_PARTNER_CODE;
const MOMO_ACCESS_KEY = process.env.MOMO_ACCESS_KEY;
const MOMO_SECRET_KEY = process.env.MOMO_SECRET_KEY;



function verifySignature(data) {
	const message = `accessKey=${MOMO_ACCESS_KEY}&amount=${data.amount}&extraData=${data.extraData}&message=${data.message}&orderId=${data.orderId}&orderInfo=${data.orderInfo}&orderType=${data.orderType}&partnerCode=${data.partnerCode}&payType=${data.payType}&requestId=${data.requestId}&responseTime=${data.responseTime}&resultCode=${data.resultCode}&transId=${data.transId}`;
	const signature = createHmac("sha256", MOMO_SECRET_KEY)
		.update(message)
		.digest("hex");
	if (data.signature !== signature) {
		throw Error("Momo signature is invalid");
	}
}

// Pay a payment
const payPayment = async (req, res, next) => {
	const id = req.params.id;
	const newPayment = new Payment(req.body);
	try {
		const data = {
			partnerCode: MOMO_PARTNER_CODE,
			requestId: id,
			amount: newPayment.amount,
			orderId: id,
			orderInfo: newPayment.payment_info,
			redirectUrl: "http://localhost:3000",
			ipnUrl: "http://localhost:8000/api/payments/ipn",
			requestType: "captureWallet",
			extraData: "",
			lang: "vi",
		};

		const message = `accessKey=${MOMO_ACCESS_KEY}&amount=${data.amount}&extraData=${data.extraData}&ipnUrl=${data.ipnUrl}&orderId=${data.orderId}&orderInfo=${data.orderInfo}&partnerCode=${data.partnerCode}&redirectUrl=${data.redirectUrl}&requestId=${data.requestId}&requestType=${data.requestType}`;
		data.signature = createHmac("sha256", MOMO_SECRET_KEY)
			.update(message)
			.digest("hex");


		fetch("https://test-payment.momo.vn/v2/gateway/api/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(async (result) => {
			const json = await result.json();
			res.status(200).json(json);
		});
	} catch (err) {
		next(err);
	}
};

const checkTransactionStatus = async (req, res, next) => {
	const id = req.params.id;
	const newPayment = new Payment(req.body);
	console.log(newPayment);
	try {
		const data = {
			partnerCode: MOMO_PARTNER_CODE,
			requestId: id,
			orderId: id,
			lang: "vi"
		};

		const message = `accessKey=${MOMO_ACCESS_KEY}&orderId=${data.orderId}&partnerCode=${data.partnerCode}&requestId=${data.requestId}`;
		newData.signature = createHmac("sha256", MOMO_SECRET_KEY)
			.update(message)
			.digest("hex");


		fetch("https://test-payment.momo.vn/v2/gateway/api/query", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(async (result) => {
			const json = await result.json();
			res.status(200).json(json);
		});
	} catch (err) {
		next(err);
	}
}

// Save IPN
const saveIpn = (req, res, next) => {
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
};

module.exports = { payPayment, saveIpn, checkTransactionStatus };
