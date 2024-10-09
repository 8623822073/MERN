const express = require("express");
const path = require("path");

const app = express();

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the registration form (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html","signup.css","style.css"));
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
