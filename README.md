# Random Joke Generator

## 1. Project Description
A lightweight, beginner-friendly Node.js + Express API that serves random jokes from a local array of curated jokes stored in the codebase.  It features a local array of curated jokes, an API endpoint (`/api/randomjoke`) that returns a randomly selected joke in JSON format, filtering via query parameters (`?type=short` for short jokes, `?type=long` for long jokes), and an interactive web UI built with EJS templating, static assets, and client-side JavaScript (including theme/color persistence via localStorage). This project demonstrates core concepts like randomization, array manipulation, query parameter handling, and serving both JSON API responses and static HTML in Node.js.

## 2. Project Objective
- Implement randomization logic using JavaScript arrays and `Math.random()`.
- Build a simple Express server with a custom API endpoint.
- Handle query parameters for filtering jokes.
- Serve a responsive frontend that consumes the backend API.
- Practice separation of concerns (jokes array) from logic.

## 3. Features
- Random selection of a joke from a predefined array on every request.
- Optional filter via query parameter: `/randomjoke?type=short` returns only short (< 30 words) jokes and `/randomjoke?type=long` returns only long (>= 30 words) jokes.
- API returns JSON by default (for programmatic use or frontend fetch).
- Interactive frontend with "Generate Joke" button and automatic initial load.
- Support for both short and long jokes.
- Responsive, clean UI with loading state.
- Graceful fallback if no jokes match the filter.
- Uses `.env` for configuration (e.g., PORT).

## 4. Application Flow
- Server starts on port 3000 (or 5000 if 3000 is unavailable, or as defined in `.env`).
- User visits the root URL (`localhost:3000/api/randomjoke or ...:5000/ api/ randomjokes`) → Express renders the EJS view (`jokesVies.ejs`) with an initial random joke fetched server-side.
- The page loads with the joke already displayed (no initial client-side request needed).
- User can optionally select a filter (short/long) via UI controls.
- User clicks "Generate Joke" → frontend (`main.js`) sends a GET request to `/api/randomjoke` (with optional `?type=short` or `?type=long`).
- Backend filters the jokes array accordingly, selects a random joke, and returns JSON.
- Frontend updates the DOM dynamically.
- Theme/color changes are saved to localStorage and persist across sessions/refresh.
- If no jokes match the filter, a fallback joke or friendly message is shown.

## 5. API Overview
The application exposes a dedicated RESTful JSON API endpoint.
- Method: GET
- Endpoint: `/`, `/api/randomjoke`
- Description:
 - `/`: Renders the mainweb UI with initial joke
 - `/api/randomjoke`: Returns a random joke as JSON            |

Base URL examples (server runs on port 3000 by default; falls back to 5000 if unavailable):
- `http://localhost:3000/api/randomjoke`
- `http://localhost:5000/api/randomjoke`

Example requests (using port 5000 for illustration):
- Any joke: `http://localhost:5000/api/randomjoke`
- Short only: `http://localhost:5000/api/randomjoke?type=short`
- Long only: `http://localhost:5000/api/randomjoke?type=long`

Example JSON responses:
- Short (< 30 words):
 ```json
{
   "id":1,
      "joke":"Why do Nigerian devs love Power Banks? Na because 'E no dey carry last'.",
      "type":"short"
}

## 6. Project Architecture
Random-jokes-generator-api/
├── controllers/           # Business logic layer
│   └── jokesController.js # Handles joke selection, randomization, filtering
├── models/                # Data layer
│   └── jokesModels.js     # Defines and exports the jokes array/data structure
├── routes/                # Routing layer
│   └── jokesRoute.js      # Defines Express routes and maps them to controllers
├── validations/           # Validation layer
│   └── validationSchema.js # Schema/rules for query parameter validation
├── views/                 # Presentation layer (server-side)
│   └── jokesUi.ejs        # EJS template for rendering the UI
├── public/                # Static assets (client-side)
│   ├── css/style.css
│   └── js/main.js
├── app.js                 # Express app setup (middleware, view engine, routes)
├── server.js              # Server bootstrap (starts the app, loads env)
└── ...                    # Config files (.gitignore, package.json, etc.)

## 7. Team Roles and Resposibility
This is a collaborative Group 3 mini-project. Below are the team members and their primary contributions:
- Ayomide Winner Ojo-sola (@sola_ayomide) – Writing and maintaining the README and API documentation.
- Sarah Motunrayo Osiyemi (@Sarahtuns16) – Gathering jokes data and structuring it into data models; implementing controller logic.
- Edgal James Iruoghene – Implementing the random joke selection logic, including the function to randomly pick jokes from the dataset and adding error handling to prevent crashes if data is empty.
- Leniency Yowika (@Lyowika7) – UI design and frontend development (layout, styling, and population of the interface).
- Ogbebor Aisosa Matthew – Setting up the Node.js + Express server; structuring the project using MVC architecture; integrating EJS templating; updating frontend JavaScript logic to use localStorage for persisting UI color/theme changes; splitting tasks among team members; reviewing, approving, and merging pull requests; resolving merge conflicts.
- Ebubechukwu Jeff Osaji(Her_Light) responsible for correcting errors in the README and API Documentation.
- Blessing Iyobosa Isibor (iyobosa-bi) Transformed the jokes.js into jokes.json and read the file into the jokesModel.js Implemented the api/random jokes route and connected it to the controller. Returned a render response to the jokesView.ejs from the controller. Git Collaboration (Push and pull requests)

## 8. validation and Error Handling
- Query parameters validated using schema in validations/validationSchema.js.
- Invalid inputs ignored or return friendly errors.
- Filtering fallback ensures a joke is always returned when possible.
- Controller handles edge cases (empty array, no matches).

## 9.  Testing Approach
- Manual testing of routes, UI, filtering, randomization.
- Test validation behavior with invalid queries.

## 10. Getting Started
Prerequisites
- Node.js
- npm

Installation
Clone the repository:
- git clone https://github.com/Aisdev979/Random-jokes-generator-api.git

Navigate to the project folder:
- cd Random-jokes-generator-api

Install dependencies:
- npm install (dotenv, ejs, express), devDependency(nodemon)

Create a .env file to set a custom port:
- PORT=3000

Running the ApplicationDevelopment (with nodemon):
- npm run dev

Production:
- npm start

The server runs on port 3000 by default. If port 3000 is unavailable, it will fall back to 5000 (or as configured in .env).
Open http://localhost:3000 (or :5000) to view the web UI.
API endpoint: http://localhost:3000/api/randomjoke (or :5000).

## 11.Learning Outcomes
- Implemented clean separation of concerns in a Node.js/Express app.
- Mastered modular MVC architecture and team collaboration workflows.
- Built hybrid server/client rendering with EJS, fetch, and localStorage.
- Learned query validation, robust error handling, and Git-based collaboration (PR reviews, merges, conflict resolution).
- Gained experience organizing a mini group project.

## 12. Future Improvements
- Add more filters/categories and expand jokes array.
- Implement user-submitted jokes (with validation).
- Add authentication and favorite jokes persistence.

## 13. Documentation
- Primary: This README
- API examples in section 5

## 14. Contributors
Aisdev979 (Ogbebor Aisosa Matthew): Project lead and repository maintainer
Ayomide Winner Ojo-sola (@sola_ayomide)
Sarah Motunrayo Osiyemi (@Sarahtuns16)
Edgal James Iruoghene
Leniency Yowika (@Lyowika7)
Ebubechukwu Jeff Osaji(@Her-Light)
Iyobosa Isibor (@iyobosa-bi)

Thank you to the entire Group 3 team for the collaboration!
