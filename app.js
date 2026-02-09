import dotenv from "dotenv";
import express from "express";
import ejs from "ejs";

dotenv.config();
const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));

// Routes
app.get("/api/joke", (req, res) => {
  const { type } = req.query || "";

  res.render("jokesUI",{name: "John", jokeTypeSelected: type});
});

export default app;
