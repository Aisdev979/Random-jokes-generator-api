import { getRandomJoke, filterJokesByType } from "../utils/jokelogic.js";
import { returnAllJokes } from "../models/jokesModels.js";

const jokes =  returnAllJokes();
let generatedRandomJoke;


// function getFilteredRandomJoke(jokes,type) {
//     const filteredJokes = filterJokesByType(jokes, type);

//     if (filteredJokes.length === 0) {
//         return "No jokes found for the requested type.";
//     }

//     return getRandomJoke(filteredJokes);
// }

function getFilteredRandomJoke(req,res) {

    //   console.log(req)
    // res.send(returnAllJokes()).status(200); logs all jsondata with success response 200
    // res.send(jokes).status(200); 
    // console.log(jokes);

    try{

        const { type } = req.query;
        const filteredJokes = filterJokesByType(jokes,type)
        //  console.log(filteredJokes);
        //   res.send(filteredJokes).status(200); 

        if(filteredJokes.length === 0){

        return res.json({responseCode:"05",message:"No jokes found for the requested Type",data:null}).status(404);
        }

        //call the getRandomJoke function

        generatedRandomJoke = getRandomJoke(filteredJokes);

        return res.json({responseCode:"00",message:"Random Joke Generated Successfully",data:generatedRandomJoke}).status(200);
        
        //   res.send(generatedRandomJoke).status(200); 
    }catch(error){

           return res.json({responseCode:"08",message:"Failed to Generate Random Joke",data:generatedRandomJoke}).status(400);
    }


}


export { getFilteredRandomJoke };
