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
router.put("/:id", verifyAdmin, updateTicket);

// Delete ticket
router.delete("/:movie_id", verifyAdmin, deleteTicket);

// Get a ticket
router.get("/:id", verifyAdmin, getTicket);

// Get all user's tickets
router.get("/users/:id", verifyUser, getAllTicketsOfAnUser);

// Get all movies's tickets
router.get("/movies/:movie_id", verifyAdmin, getAllTicketsOfAMovie);

// Get all tickets
router.get("/", getAllTickets);

module.exports = router;