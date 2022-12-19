const Movie = require( "../models/Movie.js");
const Ticket = require( "../models/Ticket.js");

// Create a new movie
const createMovie = async (req, res, next) => {
	const newMovie = new Movie(req.body);

	try {
		const savedMovie = await newMovie.save();
		res.status(200).json(savedMovie);
	} catch (err) {
		next(err);
	}
};

// Update a movie
const updateMovie = async (req, res, next) => {
	try {
		const updatedMovie = await Movie.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedMovie);
	} catch (err) {
		next(err);
	}
};

// Delete an exist movie
const deleteMovie = async (req, res, next) => {
	try {
		await Movie.findByIdAndDelete(req.params.id);
		res.status(200).json("Movie has been deleted.");
	} catch (err) {
		next(err);
	}
};

// Get a movie
const getMovie = async (req, res, next) => {
	try {
		const movie = await Movie.findById(req.params.id);
		res.status(200).json(movie);
	} catch (err) {
		next(err);
	}
};

// Get all movies
const getAllMovies = async (req, res, next) => {
	const { min, max, ...others } = req.query;
	try {
		const allMovies = await Movie.find({
			...others,
			price: { $gt: min | 1, $lt: max || 1000000 },
		}).limit(req.query.limit);
		res.status(200).json(allMovies);
	} catch (err) {
		next(err);
	}
};

// export const countByCity = async (req, res, next) => {
//   const cities = req.query.cities.split(",");
//   try {
//     const list = await Promise.all(
//       cities.map((city) => {
//         return Hotel.countDocuments({ city: city });
//       })
//     );
//     res.status(200).json(list);
//   } catch (err) {
//     next(err);
//   }
// };
// export const countByType = async (req, res, next) => {
//   try {
//     const hotelCount = await Hotel.countDocuments({ type: "hotel" });
//     const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
//     const resortCount = await Hotel.countDocuments({ type: "resort" });
//     const villaCount = await Hotel.countDocuments({ type: "villa" });
//     const cabinCount = await Hotel.countDocuments({ type: "cabin" });

//     res.status(200).json([
//       { type: "hotel", count: hotelCount },
//       { type: "apartments", count: apartmentCount },
//       { type: "resorts", count: resortCount },
//       { type: "villas", count: villaCount },
//       { type: "cabins", count: cabinCount },
//     ]);
//   } catch (err) {
//     next(err);
//   }
// };

// export const getHotelRooms = async (req, res, next) => {
//   try {
//     const hotel = await Hotel.findById(req.params.id);
//     const list = await Promise.all(
//       hotel.rooms.map((room) => {
//         return Room.findById(room);
//       })
//     );
//     res.status(200).json(list)
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = { createMovie, deleteMovie, updateMovie, getMovie, getAllMovies }
