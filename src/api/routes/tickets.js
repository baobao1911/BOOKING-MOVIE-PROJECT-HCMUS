const express = require("express");
const {
	createTicket,
	updateTicket,
	deleteTicket,
	getTicket,
	getAllTicketsOfAnUser,
	getAllTicketsOfAMovie,
} = require("../controllers/tickets.js");
const { verifyAdmin, verifyUser } = require("../utils/verify.js");

const router = express.Router();

//CREATE
router.post("/:movie_id", verifyAdmin, createTicket);

//UPDATE
router.put("/:id", verifyAdmin, updateTicket);

//DELETE
router.delete("/:id/:movie_id", verifyAdmin, deleteTicket);

// GET A TICKET
router.get("/:id", verifyAdmin, getTicket);

// GET TICKETS OF USER
router.get("/user/:user_id", verifyUser, getAllTicketsOfAnUser);

// GET TICKETS OF MOVIE
router.get("/movie/:movie_id", verifyAdmin, getAllTicketsOfAMovie);

module.exports = router;