const express = require("express");
const mongoose = require("mongoose");
const carModel = require("./mongoose/schemas/car");
const app = express();

app.use(express.json());
app.use(express.static("public"));

mongoose
  .connect("mongodb://localhost:27017/carsdb")
  .then(() => {
    console.log("Sikeresen kapcsolódtál a szerverhez.");
  })
  .catch((err) => {
    console.log("Hiba a kapcsolat létrehozása során:", err);
  });

app.post("/api/cars", async (req, res) => {
  const {
    carName,
    carType,
    carProductionDate,
    carPrice,
    carLink,
    carDescription,
  } = req.body;

  const newCar = new carModel({
    carName,
    carType,
    carProductionDate,
    carPrice,
    carLink,
    carDescription,
  });

  try {
    const savedCar = newCar.save();
    res.status(200).json(savedCar);
  } catch {
    res.status(500).json("Hibás mentési folyamat.");
  }
});

app.get("/api/cars", async (req, res) => {
  const cars = await carModel.find();
  res.json(cars);
});

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/cars", async (req, res) => {
  res.sendFile("./cars.html", { root: __dirname });
});

app.listen(3300, () => {
  console.log("A szerver elindult a http://localhost:3300/ címen.");
});
