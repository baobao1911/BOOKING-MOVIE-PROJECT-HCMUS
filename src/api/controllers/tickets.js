const Ticket = require("../models/Ticket.js");
const Movie = require("../models/Movie.js");
const { createError } = require("../utils/error.js");

// Create a new ticket
const createTicket = async (req, res, next) => {
	const movieId = req.params.movie_id;
	req.body["movie_id"] = movieId;
	const newTicket = new Ticket(req.body);

	try {
		const movie = await Movie.findById(movieId);
		if (movie.booked_seats.indexOf(newTicket.seat_number) >= 0) {
			throw new Error("Invalid seat");
		}

		var savedTicket = await newTicket.save();
		await Movie.findByIdAndUpdate(movieId, {
			$addToSet: {
				booked_tickets: savedTicket._id,
				booked_seats: savedTicket.seat_number,
			},
		});
		res.status(200).json(savedTicket);
	} catch (err) {
		if (err.message === "Invalid seat") {
			next(createError(409, "The seat has been booked."));
		} else if (Dataloi) {
			next(createError(500, err));
		} else {
			next(err);
		}
	}
};

// Update an exist ticket
const updateTicket = async (req, res, next) => {
	try {
		const updatedTicket = await Ticket.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedTicket);
	} catch (err) {
		next(err);
	}
};

// Delete a ticket
const deleteTicket = async (req, res, next) => {
	const movieId = req.params.movie_id;
	try {
		const ticket = await Ticket.findByIdAndDelete(req.params.id);
		try {
			await Movie.findByIdAndUpdate(movieId, {
				$pull: {
					booked_seats: ticket.seat_number,
					booked_tickets: ticket._id,
				},
			});
		} catch (err) {
			next(err);
		}
		res.status(200).json("Ticket has been deleted.");
	} catch (err) {
		next(err);
	}
};

// Get a ticket
const getTicket = async (req, res, next) => {
	try {
		const ticket = await Ticket.findById(req.params.id);
		res.status(200).json(ticket);
	} catch (err) {
		next(err);
	}
};

// Get all tickets of a movie
const getAllTicketsOfAMovie = async (req, res, next) => {
	const movieId = req.params.movie_id;
	try {
		const allTickets = await Ticket.find({ movie_id: movieId }).limit(
			req.query.limit
		);
		res.status(200).json(allTickets);
	} catch (err) {
		next(err);
	}
};

// Get all tickets of an user
const getAllTicketsOfAnUser = async (req, res, next) => {
	const userId = req.params.user_id;
	try {
		const allTickets = await Ticket.find({ user_id: userId }).limit(
			req.query.limit
		);
		res.status(200).json(allTickets);
	} catch (err) {
		next(err);
	}
};

module.exports = { getAllTicketsOfAnUser, getAllTicketsOfAMovie, getTicket, createTicket, deleteTicket, updateTicket }
