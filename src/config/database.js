const mongoose = require("mongoose");

require("dotenv").config();

const connectDb = mongoose
	.connect(process.env.DATABASE_URL)
	.then(() => console.log("Database connected"));

module.exports = connectDb;
