const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("./view/index.html", { root: __dirname });
});

app.listen(3300, () => {
  console.log("A szerver elindult a http://localhost:3300/ címen.");
});
