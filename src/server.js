const express = require("express");

const cors = require("cors");

const app = express();

require("dotenv").config();

require("./config/database");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", require("./route/personRoute"));



app.listen(PORT, () => console.log(`Listening on port ${PORT}....`));
