const express = require('express');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");
const moviesRoute = require("./routes/movies.js");
const ticketsRoute = require("./routes/tickets.js");
const paymentsRoute = require("./routes/payments.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
dotenv.config();

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
		console.log("Connected to mongoDB.");
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on("disconnected", () => {
	console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/tickets", ticketsRoute);
app.use("/api/payments", paymentsRoute);

app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessage = err.message || "Something went wrong!";
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack,
	});
});

app.listen(8000, () => {
	connect();
	console.log("Connected to backend.");
});
