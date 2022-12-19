const express = require("express");
const {
	createMovie,
	deleteMovie,
	updateMovie,
	getMovie,
	getAllMovies,
} = require("../controllers/movies.js");

const { verifyAdmin } = require("../utils/verify.js");

const router = express.Router();

// Create a new movie
router.post("/", verifyAdmin, createMovie);

// Update a movie
router.put("/:id", verifyAdmin, updateMovie);

// Delete a movie
router.delete("/:id", verifyAdmin, deleteMovie);

// Get a movie
router.get("/find/:id", getMovie);

// get all movies
router.get("/", getAllMovies);

// // // router.get("/countByCity", countByCity);
// // // router.get("/countByType", countByType);
// // // router.get("/room/:id", getHotelRooms);

module.exports = router;