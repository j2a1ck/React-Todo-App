import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userControllers from "./controllers/userControllers.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/v1/", userControllers);

const server = app
  .listen(port, () => {
    connectDB();
    console.log(`Server running on port ${port}`);
  })
  .on("error", (err) => {
    if (err.code === "EACCES") {
      console.error(`Port ${port} requires elevated privileges`);
    } else if (err.code === "EADDRINUSE") {
      console.error(`Port ${port} is already in use`);
    } else {
      console.error(err);
    }
    process.exit(1);
  });
