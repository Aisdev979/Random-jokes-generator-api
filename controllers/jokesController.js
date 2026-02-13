// Import business logic functions
import { getRandomJoke, filterJokesByType } from "../utils/jokelogic.js";
import { returnAllJokes } from "../models/jokesModels.js";
import {
  validateJokeObject,
  isTypeConsistent,
  sanitizeText
} from "../validations/validationSchema.js";

/**
 * Controller function:
 * Handles request, filters jokes by type (if provided),
 * selects a random joke, and renders the EJS view.
 */

function getFilteredRandomJoke(req, res) {
  try {
    // Retrieve all jokes from the model
    const jokes = returnAllJokes()

    // Extract 'type' from query string (e.g., ?type=short)
    const { type } = req.query || "";

    // Filter jokes based on selected type
    const filteredJokes = filterJokesByType(jokes, type);

    // If no jokes match the requested type
    if (filteredJokes.length === 0) {
      return res.render("jokesViews", {
        jokeMessage: "No Jokes found for the requested Type",
        jokeTypeSelected: type,
      });
    }

    // calling  the getRandomJoke function
    const generatedRandomJoke = getRandomJoke(filteredJokes);


    if (!validateJokeObject(generatedRandomJoke)) {
      return res.render("jokesViews", {
        jokeMessage: "Invalid joke data detected.",
        jokeTypeSelected: type,
      });
    }

    if (!isTypeConsistent(generatedRandomJoke)) {
      return res.render("jokesViews", {
        jokeMessage: "Joke type does not match word count.",
        jokeTypeSelected: type,
      });
    }

    const safeJokeText = sanitizeText(generatedRandomJoke.joke);

    
    return res.render("jokesViews", {
      jokeMessage: safeJokeText,
      jokeTypeSelected: type,
    });
  } catch (error) {
    // Handle unexpected errors gracefully
    return res.render("jokesViews", {
      jokeMessage: "Failed to Generate Random Joke",
      jokeTypeSelected: req.query?.type || "",
    });
  }
}

export { getFilteredRandomJoke };
