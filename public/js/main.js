// Select required DOM elements
const newQuoteBtn = document.querySelector(".button");
const jokeTypeSelect = document.querySelector("#joke-type");
const quoteBox = document.querySelector("#quote-box");

// Available theme colours used for dynamic UI styling
const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

/**
 * Returns a random colour from the predefined colours array.
 * Used to dynamically change the UI theme.
 */
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Restore previously selected theme colour after page reload.
 * Since EJS re-renders the page, we use localStorage
 * to persist the colour between requests.
 */
window.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("themeColor");

  // Exit if no saved colour exists
  if (!savedColor) return;

  // Apply saved theme colour to UI elements
  document.body.style.backgroundColor = savedColor;
  quoteBox.style.color = savedColor;
  newQuoteBtn.style.backgroundColor = savedColor;
  jokeTypeSelect.style.backgroundColor = savedColor;
});

/**
 * Update the button link dynamically when the joke type changes.
 * This modifies the request URL before navigation.
 */
jokeTypeSelect.addEventListener("change", (event) => {
  const type = event.target.value;

  // If no type selected, fetch any random joke
  // Otherwise, append query parameter to filter by type
  newQuoteBtn.href = !type 
    ? `/api/randomjoke` 
    : `/api/randomjoke?type=${type}`;
});

/**
 * Before navigating to fetch a new joke,
 * generate and store a new theme colour.
 * The stored colour will be applied after page reload.
 */
newQuoteBtn.addEventListener("click", () => {
  const color = getRandomColor();
  localStorage.setItem("themeColor", color);
});
