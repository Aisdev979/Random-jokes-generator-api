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
- User visits the root URL (`/`) → Express serves the static HTML page and automatically fetches/displays an initial random joke.
- User clicks "Generate Joke" button → frontend sends GET request to `/joke` (optionally with `?type=short`).
- Backend selects a random joke from the filtered array and returns JSON.
- Errors (e.g., no jokes match filter) return a friendly fallback message.

## 5. API Overview
<!-- The app exposes endpoints for both rendered views and JSON.

|
 Method 
|
 Endpoint              
|
 Description                                
|
 Query Params                  
|
 Response Format 
|
|
--------
|
-----------------------
|
--------------------------------------------
|
-------------------------------
|
-----------------
|
|
 GET    
|
`/`
|
 Renders the main page with initial joke    
|
 None                          
|
 HTML (EJS)      
|
|
 GET    
|
`/joke`
|
 Returns a random joke as JSON              
|
`type=short`
 (optional)       
|
 JSON            
|

**Example JSON response:**
```json
{
   "id":1,
      "joke":"Why do Nigerian devs love Power Banks? Na because 'E no dey carry last'.",
      "type":"short"
} -->

## 6. View Layer
- Templating Engine: EJS (Embedded JavaScript) for server-side rendering.
- Main view: views/jokesUI.ejs – receives joke data from the server on initial load and renders it directly.
- Client-side updates: Vanilla JavaScript in public/js/main.js.
- Key elements: joke display area (conditionally renders short or long joke format), "Generate Joke" button, or the drop down button selection (Any joke, Short joke and Long joke).
- Responsive design with CSS Flexbox and media queries.(./public/css/style.css)

## 7. Project Architecture
Random-jokes-generator-api/
├── controllers/                   # Business logic layer
|    └── jokesController.js        # Handles joke selection, randomization, filtering
├── models/                        # Data layer
|    └── jokesModels.js            # Defines and exports the jokes array/data structure
├── public/                        # Static assets (client-side)
|    ├── css/style.css
│    └── js/main.js
├── routes/                        # Routing layer
|    └──jokesRoute.js              # Defines Express routes and maps them to controller
├── validations/                   # Validation layer
|    └──validationSchema.js        # Schema/rules for query parameter validation
├── views/                         # Presentation layer (server-side)
|   └──jokesUi.ejs                 # EJS template for rendering the UI
├── .gitignore
├── app.js                         # Express app setup (middleware, view engine, routes)
├── LICENSE
├── package-lock.json
├── package.json                   # Config files (.gitignore, package.json, etc.)
├── README.md
├── server.js                      # Server (starts the app, loads env)

## 8. Team Roles and Resposibility

## 9. validation and Error Handling
- Query parameters validated using schema in validations/validationSchema.js.
- Invalid inputs ignored or return friendly errors.
- Filtering fallback ensures a joke is always returned when possible.
- Controller handles edge cases (empty array, no matches).