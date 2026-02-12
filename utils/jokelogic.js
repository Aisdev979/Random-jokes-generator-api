/**
 * Allowed joke types for filtering.
 * Any type outside this list will return all jokes.
 */
const VALID_TYPES = ['short', 'long'];

/**
 * Filters jokes based on the provided type.
 * If no type is provided or the type is invalid,
 * the original jokes array is returned.
 *
 * @param {Array} jokes - Array of joke objects.
 * @param {string} type - The joke type to filter by.
 * @returns {Array} - Filtered jokes or original array.
 */
const filterJokesByType = (jokes, type) => {
    // Return all jokes if type is missing or not recognised
    if (!type || !VALID_TYPES.includes(type)) {
        return jokes;
    }

    // Return only jokes that match the requested type
    return jokes.filter(joke => joke.type === type);
};

/**
 * Selects a random joke from the provided array.
 * Returns null if the array is invalid or empty.
 *
 * @param {Array} jokesArray - The array of joke objects.
 * @returns {Object|null} - A random joke or null if unavailable.
 */
const getRandomJoke = (jokesArray) => {
    // Validate that we have a proper non-empty array
    if (!Array.isArray(jokesArray) || jokesArray.length === 0) {
        return null;
    }

    // Generate a random index within the array length
    const randomIndex = Math.floor(Math.random() * jokesArray.length);

    // Return the joke at the generated index
    return jokesArray[randomIndex];
};

export { getRandomJoke, filterJokesByType };
