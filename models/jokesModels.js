import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const _fileName = fileURLToPath(import.meta.url);
const _dirName =  path.dirname(_fileName);

// console.log(_fileName)  C:\Users\HP\Random-jokes-generator-api\models\jokesModels.js
// console.log(_dirName)    C:\Users\HP\Random-jokes-generator-api\models

const filePath =  path.join(_dirName,'jokes.txt');

let fetchedJokes = [];

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading jokes file:", err);
        fetchedJokes = [];
    }

    fetchedJokes = data;
    // console.log(fetchedJokes); 
       
});

function returnAllJokes(){
    return fetchedJokes;
}

export {returnAllJokes};