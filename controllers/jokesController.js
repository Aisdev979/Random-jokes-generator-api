import { getRandomJoke, filterJokesByType } from "../utils/jokelogic.js";
import { returnAllJokes } from "../models/jokesModels.js";
import {
  validateJokeObject,
  isTypeConsistent,
  sanitizeText
} from "../validations/validationSchema.js";

/**
 */
// function getFilteredRandomJoke(jokes, type) {
//     const filteredJokes = filterJokesByType(jokes, type);

//     if (filteredJokes.length === 0) {
//         return "No jokes found for the requested type.";
//     }

//     return getRandomJoke(filteredJokes);
// }

/**
 */
// function getFilteredRandomJoke(req, res) {
//   //   console.log(req)
//   // res.send(returnAllJokes()).status(200); logs all jsondata with success response 200
//   // res.send(jokes).status(200);
//   // console.log(jokes);

function getFilteredRandomJoke(req, res) {
  try {
    const jokes = returnAllJokes();

  
    const type = req.query?.type || "";
    const filteredJokes = filterJokesByType(jokes, type);

    if (filteredJokes.length === 0) {
      /** ejs */
      return res.render("jokesUI", {
        jokeMessage: "No Jokes found for the requested Type",
        jokeTypeSelected: type,
      });

      /** Api mode
            return res
                .status(404)
                .json({
                    success: false,
                    message: "No jokes found for the requested Type",
                    data: null,
                });
            */
    }

    // calling  the getRandomJoke function
    const generatedRandomJoke = getRandomJoke(filteredJokes);


    if (!validateJokeObject(generatedRandomJoke)) {
      return res.render("jokesUI", {
        jokeMessage: "Invalid joke data detected.",
        jokeTypeSelected: type,
      });
    }

    if (!isTypeConsistent(generatedRandomJoke)) {
      return res.render("jokesUI", {
        jokeMessage: "Joke type does not match word count.",
        jokeTypeSelected: type,
      });
    }

    const safeJokeText = sanitizeText(generatedRandomJoke.joke);

    
    return res.render("jokesUI", {
      jokeMessage: safeJokeText,
      jokeTypeSelected: type,
    });

    /** Api mode
        return res.status(200).json({
            success: true,
            message: "Random Joke Generated Successfully",
            data: generatedRandomJoke,
        });
        */

    // res.send(generatedRandomJoke).status(200);
  } catch (error) {
    return res.render("jokesUI", {
      jokeMessage: "Failed to Generate Random Joke",
      jokeTypeSelected: req.query?.type || "",
    });

    /** Api mode
        return res.status(404).json({
            success: false,
            message: "Failed to Generate Random Joke",
            data: generatedRandomJoke,
        });
        */
  }
}

export { getFilteredRandomJoke };
