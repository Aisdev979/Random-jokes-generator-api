import { jokes } from './jokes.js';
import { getFilteredRandomJoke } from './filterLogic.js';

console.log( "--- Fetching Short Joke ---" );
console.log(getFilteredRandomJoke(jokes, 'short'));

console.log("\n--- Fetching Long Joke ---");
console.log(getFilteredRandomJoke(jokes, 'long'));