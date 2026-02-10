import express from "express";
import { getFilteredRandomJoke } from "../controllers/jokesController.js";

const jokesRouter = express.Router();

jokesRouter.get("/randomjoke",getFilteredRandomJoke);

export default jokesRouter;
