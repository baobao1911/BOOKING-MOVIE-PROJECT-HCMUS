const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	categories: {
		type: [String],
		required: true,
	},
	address: {
		type: [String],
		required: true,
	},
	photos: {
		type: [String],
	},
	desc: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		min: 0,
		max: 5,
	},
	booked_seats: {
		type: [Number],
	},
	booked_tickets: {
		type: [String],
	},
	dates: {
		type: [Date],
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	trailer: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	cast: {
		type: String,
		required: true,
	},

});

module.exports = mongoose.model("Movie", MovieSchema);
