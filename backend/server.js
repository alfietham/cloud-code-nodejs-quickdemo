const express = require("express");

const app = express();

// returns a simple respnse
app.get("/backend", (req, res) => {
  console.log(`received request: ${req.method} ${req.url}`);
  res.status(200).send("Here's some data from the backend...");
});

// starts an http server on the $PORT environment variable
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

module.exports = app;
