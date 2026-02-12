
import { validateJokeType } from "../validations/validationSchema.js";
import express from "express";
import { getFilteredRandomJoke } from "../controllers/jokesController.js";

//console.log("validateJokeType:", typeof validateJokeType);
//console.log("getFilteredRandomJoke:", typeof getFilteredRandomJoke);

const jokesRouter = express.Router();

jokesRouter.get("/joke", validateJokeType, getFilteredRandomJoke);

export default jokesRouter;

