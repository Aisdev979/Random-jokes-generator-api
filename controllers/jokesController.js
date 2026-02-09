import { getRandomJoke, filterJokesByType } from "../utils/jokelogic.js";

function getFilteredRandomJoke(jokes, type) {
    const filteredJokes = filterJokesByType(jokes, type);
    
    if (filteredJokes.length === 0) {
        return "No jokes found for the requested type.";
    }

    return getRandomJoke(filteredJokes);
}

export { getFilteredRandomJoke }