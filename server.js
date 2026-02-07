import app from "./app.js";

const PORT = process.env.PORT || 5000;
const SERVER_IP = process.env.WEB_SERVER_IP

app.listen(PORT, SERVER_IP, () => {
 console.log(`Server running on port ${PORT}  on host ${SERVER_IP}`);
});