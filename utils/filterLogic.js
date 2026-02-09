const VALID_TYPES = ['short', 'long'];

function filterJokesByType(jokes, type) {
    if (!VALID_TYPES.includes(type)) {
        return jokes;
    }
    return jokes.filter(joke => joke.type === type);
}

function getRandomJoke(jokes) {
    const index = Math.floor(Math.random() * jokes.length);
    return jokes[index];
}

export { getRandomJoke, filterJokesByType };