const Payment = require("../models/Payment.js");
// const fetch = require("node-fetch");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { v4 } = require('uuid');
const { createHmac } = require('crypto');
const { createError } = require("../utils/error.js");
const { MOMO_PARTNER_CODE, MOMO_ACCESS_KEY, MOMO_SECRET_KEY } = process.env;


// Pay a payment
const payPayment = async (req, res, next) => {
	const newPayment = new Payment(req.body);
	const id = v4();

	try {
		const data = {
			partnerCode: MOMO_PARTNER_CODE,
			requestId: id,
			amount: newPayment.amount,
			orderId: id,
			orderInfo: newPayment.payment_info,
			redirectUrl:
				"https://nasty-zebras-hug-113-185-78-20.loca.lt/callback",
			ipnUrl: "https://nasty-zebras-hug-113-185-78-20.loca.lt/ipn",
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
		})
		.then(async (result) => {
			const json = await result.json();
			res.status(200).json(json);
		})
	} catch (err) {
        // next(createError(500, err));
		next(err);
    }
};


module.exports = {payPayment}
