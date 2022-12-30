const express = require("express");
const {
	createTicket,
	updateTicket,
	deleteTicket,
	getTicket,
	getAllTicketsOfAnUser,
	getAllTicketsOfAMovie,
	getAllTickets,
} = require("../controllers/tickets.js");
const { verifyAdmin, verifyUser } = require("../utils/verify.js");

const router = express.Router();

// Create ticket
router.post("/:id/:movie_id", createTicket);

// Update ticket
router.put("/:id", updateTicket);

// Delete ticket
router.delete("/:id/:movie_id", deleteTicket);

// Get a ticket
router.get("/:id", getTicket);

// Get all user's tickets
router.get("/users/:id", getAllTicketsOfAnUser);

// Get all movies's tickets
router.get("/movies/:movie_id", getAllTicketsOfAMovie);

// Get all tickets
router.get("/", getAllTickets);

module.exports = router;