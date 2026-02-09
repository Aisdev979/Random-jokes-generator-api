import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const _fileName = fileURLToPath(import.meta.url);
const _dirName =  path.dirname(_fileName);

// console.log(_fileName)  C:\Users\HP\Random-jokes-generator-api\models\jokesModels.js
// console.log(_dirName)    C:\Users\HP\Random-jokes-generator-api\models

const filePath =  path.join(_dirName,'jokes.json');

let fetchedJokes = [];

try {
    const data = fs.readFileSync(filePath, "utf8");
    fetchedJokes = JSON.parse(data);
} catch (error) {
    console.error("Error loading jokes:", error.message);
    fetchedJokes = [];
}

function returnAllJokes(){
    return fetchedJokes;
}

export {returnAllJokes};