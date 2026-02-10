export function getFilteredRandomJoke(jokes, type) {
    // 1. Filter the jokes based on the "type" requested (short or long)
    const filteredJokes = jokes.filter(j => {
        const wordCount = j.joke.trim().split(/\s+/).length;
        if (type === 'short') return wordCount < 25;
        if (type === 'long') return wordCount >= 25;
        return true; // if no type matches, return all
    });

    // 2. Check if we actually found any jokes
    if (filteredJokes.length === 0) return null;

    // 3. Define the randomIndex BEFORE using it
    const randomIndex = Math.floor(Math.random() * filteredJokes.length);

    // 4. Extract the specific joke
    const selectedJoke = filteredJokes[randomIndex];

    // 5. Calculate final wordCount for the output
    const count = selectedJoke.joke.trim().split(/\s+/).length;

    return {
        data: {
            id: selectedJoke.id,
            joke: selectedJoke.joke,
            wordCount: count,
            type: type // or calculate dynamically based on count
        }
    };
}