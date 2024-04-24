const express = require("express");
const app = express();
const mongoose = require("mongoose");
const carModel = require("./mongoose/schemas/carSchema");

app.use(express.json());
app.use(express.static("public"));

mongoose
  .connect("mongodb://localhost:27017/cars")
  .then(() => {
    console.log("Sikeresen kapcsolódtál a szerverhez.");
  })
  .catch((err) => {
    console.log("Hiba a kapcsolat létrehozása során:", err);
  });

app.get("/", (req, res) => {
  res.sendFile("./view/index.html", { root: __dirname });
});

app.get("/api/cars", async (req, res) => {
  const cars = await carModel.find();
  res.json(cars);
});

app.listen(3300, () => {
  console.log("A szerver elindult a http://localhost:3300/ címen.");
});
