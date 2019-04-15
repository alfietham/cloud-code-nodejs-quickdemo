const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home", { result: { data: null } });
});

const BACKEND_URI = "http://backend-service:3030/backend";

app.post("/fetchdata", (req, res) => {
  axios
    .get(BACKEND_URI)
    .then(response => {
      console.log(`response from ${BACKEND_URI}: ` + response.status);
      const result = response.payload;
      res.render("home", { result });
    })
    .catch(error => {
      console.error("error: " + error);
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

module.exports = app;
