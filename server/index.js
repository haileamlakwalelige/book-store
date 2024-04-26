import express from "express";
import { config } from "dotenv"; // Import config function from 'dotenv'
import { MONGODB_URL, PORT } from "./config.js";
import mongoose from "mongoose";
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN stack Tutorial!");
});

app.use(cors({
  origin:true,
  methods:['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders:['Content-type'],
}));

app.use("/books", bookRoutes);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((error) => {
    console.log(error);
  });



// Load environment variables from .env file
config();
const port = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is listening to port :${PORT}`);
});
