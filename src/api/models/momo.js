const fetch = require("node-fetch");
const { v4 } = require("uuid");
const { createHmac } = require("crypto");
const express = require("express");
const { MOMO_PARTNER_CODE, MOMO_ACCESS_KEY, MOMO_SECRET_KEY } = process.env;

const app = express();
app.use(require("body-parser").json());

app.get("/", (req, res) => {
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

app.get("/callback", (req, res) => {
	const data = req.query;
	verifySignature(data);
	console.log("Callback:", data);
	res.json(data);
});

app.post("/ipn", (req, res) => {
	const data = req.body;
	verifySignature(data);
	console.log("IPN:", data);
	res.json(data);
});

app.get("/pay/:amount", (req, res, next) => {
	const id = v4();

	const data = {
		partnerCode: MOMO_PARTNER_CODE,
		requestId: id,
		amount: 50000,
		orderId: id,
		orderInfo: "Thanh toán vé xe khách",
		redirectUrl: "https://nasty-zebras-hug-113-185-78-20.loca.lt/callback",
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
			res.redirect(json.payUrl);
		})
		.catch(next);
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server is listening on port ${port}`);
