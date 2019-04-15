const express = require("express");

const app = express();

// returns a random number with some text in JSON
app.get("/backend", (req, res) => {
  console.log(`received request: ${req.method} ${req.url}`);
  const randomFloat = Math.random() * 10000;
  const randomInt = Math.ceil(randomFloat);
  res.status(200).json({
    data: `Here's some random number: ${randomInt}`
  });
});

// starts an http server on the $PORT environment variable
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

module.exports = app;
