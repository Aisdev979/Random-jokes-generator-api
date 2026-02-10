import { getRandomJoke, filterJokesByType } from "../utils/jokelogic.js";
import { returnAllJokes } from "../models/jokesModels.js";

// function getFilteredRandomJoke(jokes,type) {
//     const filteredJokes = filterJokesByType(jokes, type);

//     if (filteredJokes.length === 0) {
//         return "No jokes found for the requested type.";
//     }

//     return getRandomJoke(filteredJokes);
// }

function getFilteredRandomJoke(req, res) {
    //   console.log(req)
    // res.send(returnAllJokes()).status(200); logs all jsondata with success response 200
    // res.send(jokes).status(200);
    // console.log(jokes);

    const jokes = returnAllJokes();

    try {
        const { type } = req.query || "";
        const filteredJokes = filterJokesByType(jokes, type);
        //  console.log(filteredJokes);
        //   res.send(filteredJokes).status(200);

        if (filteredJokes.length === 0) {

             /** ejs render mode */
        return res.render("jokesUI",{jokeMessage:"No Jokes found for the requested Type", jokeTypeSelected: type});

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

        //call the getRandomJoke function

        const generatedRandomJoke = getRandomJoke(filteredJokes);

        /** ejs render mode */
        return res.render("jokesUI",{jokeMessage: generatedRandomJoke.joke, jokeTypeSelected: type});


        /** Api mode 
        return res.status(200).json({
            success: true,
            message: "Random Joke Generated Successfully",
            data: generatedRandomJoke,
        });
        */

        //   res.send(generatedRandomJoke).status(200);
    } catch (error) {

         /** ejs render mode */
         return res.render("jokesUI",{jokeMessage:"Failed to Generate Random Joke" , jokeTypeSelected: type});

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
