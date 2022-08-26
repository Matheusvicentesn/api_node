const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const data = require("./src/data/data.json");

app.get("/data", (req, res) => {
  return res.json(data);
});

app.listen(port, () => {
  console.log("Executando API");
});
