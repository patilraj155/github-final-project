const express = require("express");
const app = express();
const books = require("./booksdb.js");

app.use(express.json());

// Task 1 Route
app.get("/books", (req, res) => {
  res.send(books);
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
