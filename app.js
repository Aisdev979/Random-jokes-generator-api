import dotenv from "dotenv";
import express from "express";
import ejs from "ejs";
import jokesRouter from "./routes/jokesRoute.js";

dotenv.config();
const app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/api", jokesRouter);

export default app;
