/**
 * Selects a random joke from the provided array.
 * @param {Array} jokesArray - The array of joke objects.
 * @returns {Object} - A single random joke object.
 */

const VALID_TYPES = ['short', 'long'];

const filterJokesByType = (jokes, type) => {
    if (!VALID_TYPES.includes(type)) {
        return jokes;
    }
    return jokes.filter(joke => joke.type === type);
}

const getRandomJoke = (jokesArray) => {
    // Check if the array is invalid or empty
    if (!jokesArray || jokesArray.length === 0) {
        throw new Error("The jokes array is empty or undefined. Please provide a valid array of jokes.");
    }

    const randomIndex = Math.floor(Math.random() * jokesArray.length);
    return jokesArray[randomIndex];
};

export { getRandomJoke, filterJokesByType };