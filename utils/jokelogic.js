/**
 * Selects a random joke from the provided array.
 * @param {Array} jokesArray - The array of joke objects.
 * @returns {Object} - A single random joke object.
 */
const getRandomJoke = (jokesArray) => {
    if (!jokesArray || jokesArray.length === 0) {
        return null; 
    }
    const randomIndex = Math.floor(Math.random() * jokesArray.length);
    return jokesArray[randomIndex];
};

module.exports = { getRandomJoke };