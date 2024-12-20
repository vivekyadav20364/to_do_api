const express = require("express");
const cors = require("cors");
const connectDB = require('./config/db');
const dotenv=require('dotenv');
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
connectDB();


const taskRoutes = require("./routers/taskRoutes");
const authRoutes = require("./routers/authRoutes");

app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);

app.listen(process.env.PORT, () => console.log("Server running on port 5000"));
