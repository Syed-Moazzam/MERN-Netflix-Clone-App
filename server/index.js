const express = require("express");
const cors = require("cors");
const connectToMongo = require('./db.js');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require("./routes/UserRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

// Database connection
connectToMongo();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}!`);
});
