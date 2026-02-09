const newQuoteBtn = document.querySelector(".button");
const jokeTypeSelect = document.querySelector("#joke-type");
const quoteBox = document.querySelector("#quote-box");

// Available theme colors
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

// Pick a random color from the list
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Restore the saved theme color after page reload (EJS re-render)
window.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("themeColor");
  if (!savedColor) return;

  document.body.style.backgroundColor = savedColor;
  quoteBox.style.color = savedColor;
  newQuoteBtn.style.backgroundColor = savedColor;
  jokeTypeSelect.style.backgroundColor = savedColor;
});

// Update the link URL when joke type changes
jokeTypeSelect.addEventListener("change", (event) => {
  const type = event.target.value;

  newQuoteBtn.href = !type ? `/api/joke` : `/api/joke?type=${type}`;
});

// Change and save the color before navigating to the next joke
newQuoteBtn.addEventListener("click", () => {
  const color = getRandomColor();
  localStorage.setItem("themeColor", color);
});
