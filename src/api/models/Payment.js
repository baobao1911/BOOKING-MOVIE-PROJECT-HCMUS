const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
	{
		service_name: {
			type: String,
			required: true,
		},
        amount: {
            type: Number,
            required: true,
        },
        payment_info: {
            type: String,
            required: true,
        }
	}, {timestamps: true}
);

module.exports = mongoose.model("Payment", PaymentSchema);
