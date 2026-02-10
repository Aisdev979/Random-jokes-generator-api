import {returnAllJokes} from './models/jokesModels.js';
import { getFilteredRandomJoke } from './controllers/jokesController.js';

console.log('SHORT JOKE:', getFilteredRandomJoke(returnAllJokes(), 'short'));
console.log('LONG JOKE:', getFilteredRandomJoke(returnAllJokes(), 'long'));
console.log('DEFAULT:', getFilteredRandomJoke(returnAllJokes()));
console.log('INVALID TYPE:', getFilteredRandomJoke(returnAllJokes(), 'funny'));
console.log('INVALID TYPE:', getFilteredRandomJoke([], 'funny'));

console.log(returnAllJokes());