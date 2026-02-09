random-joke-generator/
├── backend/
│ ├── src/
│ │ ├── data/
│ │ │ ├── jokes.json # Joke database (30+ jokes)
│ │ │ └── jokeData.js # Data management layer
│ │ ├── routes/
│ │ │ └── jokeRoutes.js # API route handlers
│ │ ├── utils/
│ │ │ └── randomUtils.js # Utility functions
│ │ └── app.js # Main Express application
│ ├── package.json # Backend dependencies
│ └── README.md # Backend documentation
│
└── frontend/
├── index.html # Main HTML file
├── styles.css # CSS styles
├── script.js # Main application logic
├── api.js # API service layer
└── server.js # Optional static server
## Pacakages installed already
- ejs
-express
-dotenv