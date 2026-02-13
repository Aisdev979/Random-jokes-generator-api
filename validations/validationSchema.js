
const ALLOWED_TYPES = ["short", "long"];
function validateJokeType(req, res, next) {
    //console.log("validateJokeType HIT:", req.method, req.originalUrl, "type=", req.query.type);
  const type = req.query.type || "";

  if (!type) {
    return next();
  }
  const cleanType = String(type).toLowerCase().trim();
  if (!ALLOWED_TYPES.includes(cleanType)) {
    return res.status(400).render("jokesViews", {
      jokeMessage: "Invalid type. Use ?type=short or ?type=long",
      jokeTypeSelected: "",
    });
  }
  req.query.type = cleanType;

  next();
}
function sanitizeText(text) {

  const safeText = String(text);

  const cleanedText = safeText.replace(/<[^>]*>?/gm, "");

  return cleanedText;
}

function countWords(text) {
const safeText = String(text).trim();
const noPunctuation = safeText.replace(/[^\w\s]/g, " ");
const words = noPunctuation.split(/\s+/).filter(Boolean);
return words.length;
}
function validateJokeObject(jokeObj) {
  if (!jokeObj || typeof jokeObj !== "object") {
    return false;
  }

  if (typeof jokeObj.id !== "number") {
    return false;
  }
  if (typeof jokeObj.joke !== "string") {
    return false;
  }
  if (jokeObj.joke.trim().length === 0) {
    return false;
  }
  if (!ALLOWED_TYPES.includes(jokeObj.type)) {
    return false;
  }
  return true;
}
function isTypeConsistent(jokeObj) {
  const wordCount = countWords(jokeObj.joke);
  if (wordCount <= 15 && jokeObj.type !== "short") {
    return false;
  }
  if (wordCount > 16 && jokeObj.type !== "long") {
    return false;
  }
  return true;
}
export {
  validateJokeType,
  sanitizeText,
  countWords,
  validateJokeObject,
  isTypeConsistent
};