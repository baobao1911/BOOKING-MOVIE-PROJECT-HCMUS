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
        },
        info_id:{
            type:[String],
            require :true,
        }
	}, {timestamps: true}
);

module.exports = mongoose.model("Payment", PaymentSchema);
