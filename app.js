import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./routes/recipeRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/connectDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", router);

app.use(errorHandler);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
