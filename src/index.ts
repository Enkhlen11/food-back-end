import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectMongoDb } from "./database/db";
import { categoryRoute } from "./routes/food-category.route";

configDotenv();
connectMongoDb();
const app = express();
app.use(bodyParser.json());
const port = process.env.port;

app.use("/food-category", categoryRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});
