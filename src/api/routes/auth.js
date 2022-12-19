const express = require('express');
const { login, register, logout } = require("../controllers/auth.js");

const router = express.Router();

// Register new account
router.post("/register", register);

// Login to an account
router.post("/login", login);

// Logout from account
router.post("/logout", logout);

module.exports = router;