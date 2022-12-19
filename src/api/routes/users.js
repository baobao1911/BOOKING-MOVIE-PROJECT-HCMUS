const express = require("express");
const {
	updateUser,
	deleteUser,
	getUser,
	getAllUsers,
} = require("../controllers/users.js");
const { verifyAdmin, verifyUser } = require("../utils/verify.js");

const router = express.Router();

// Update user information
router.put("/:id", verifyAdmin, updateUser);

// Delete user information
router.delete("/:id", verifyAdmin, deleteUser);

// Get a user by id
router.get("/:id", verifyUser, getUser);

// Get all user
router.get("/", verifyAdmin, getAllUsers);

module.exports = router;
