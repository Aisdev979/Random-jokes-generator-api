// Import business logic functions
import { getRandomJoke, filterJokesByType } from "../utils/jokelogic.js";

// Import model function to retrieve all jokes
import { returnAllJokes } from "../models/jokesModels.js";

/**
 * Controller function:
 * Handles request, filters jokes by type (if provided),
 * selects a random joke, and renders the EJS view.
 */
function getFilteredRandomJoke(req, res) {
  try {
    // Retrieve all jokes from the model
    const jokes = returnAllJokes();

    // Extract 'type' from query string (e.g., ?type=short)
    const { type } = req.query || "";

    // Filter jokes based on selected type
    const filteredJokes = filterJokesByType(jokes, type);

    // If no jokes match the requested type
    if (filteredJokes.length === 0) {
      return res.render("jokesUI", {
        jokeMessage: "No Jokes found for the requested Type",
        jokeTypeSelected: type,
      });
    }

    // Generate a random joke from the filtered list
    const generatedRandomJoke = getRandomJoke(filteredJokes);

    // Render the view with the selected joke
    return res.render("jokesViews", {
      jokeMessage: generatedRandomJoke.joke,
      jokeTypeSelected: type,
    });

  } catch (error) {
    // Handle unexpected errors gracefully
    return res.render("jokesUI", {
      jokeMessage: "Failed to Generate Random Joke",
      jokeTypeSelected: type,
    });
  }
}

export { getFilteredRandomJoke };
