# Random Joke Generator

## 1. Project Description
A lightweight, beginner-friendly Node.js + Express API that serves random jokes from a local array of curated jokes stored in the codebase.  The backend provides a simple REST API endpoint (`/joke`) that selects and returns a random joke, with optional filtering by joke type (e.g., `short`, `long`), and automatically detects whether to return JSON (for API clients) or a simple HTML page (for browsers). The frontend is a single-page interactive interface that fetches and displays jokes dynamically.

This project demonstrates core concepts like randomization, array manipulation, query parameter handling, and serving both JSON API responses and static HTML in Node.js.


## 2. Project Objective
- Implement randomization logic using JavaScript arrays and `Math.random()`.
- Build a simple Express server with a custom API endpoint.
- Handle query parameters for filtering jokes.
- Serve a responsive frontend that consumes the backend API.
- Practice separation of concerns (jokes array) from logic.

## 3. Features
- Random selection of a joke from a predefined array on every request.
- Optional filter via query parameter: `/joke?type=short` returns only short (< 30 words) jokes and `/joke?type=long` returns only long (>= 30 words) jokes.
- API returns JSON by default (for programmatic use or frontend fetch).
- Interactive frontend with "Generate Joke" button and automatic initial load.
- Support for both short and long jokes.
- Responsive, clean UI with loading state.

## 4. Application Flow
<!-- - User visits the root URL (`/`) → Express serves the static HTML page and automatically fetches/displays an initial random joke.
- User clicks "Generate Joke" button → frontend sends GET request to `/joke` (optionally with `?type=short`).
- Backend selects a random joke from the filtered array and returns JSON.
- Frontend updates the display (shows setup first, reveals punchline on click for two-part jokes).
- Errors (e.g., no jokes match filter) return a friendly fallback message. -->

## 5. API Overview