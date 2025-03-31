const express = require("express");
const app = express();
const path = require("path");
const route = require('./routes/routes');

const PORT=3005

app.use(express.static(path.join(__dirname, "public"))); // Serve static files
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs"); // Set EJS as view engine


app.use('/', route);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
