import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
//app.use("/jokes",  import route here "./routes/jokesRoute");

app.get("/", (req, res) => {
    res.json({message: "Hello world, testing!!!"})
})

export default app;