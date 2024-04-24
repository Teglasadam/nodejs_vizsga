const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  carName: {
    type: String,
    required: true,
  },
  carType: {
    type: String,
    required: true,
  },
  carProductionDate: {
    type: String,
    required: true,
  },
  carPrice: {
    type: String,
    required: true,
  },
  carLink: {
    type: String,
    required: true,
  },
  carDescription: {
    type: String,
    required: true,
  },
});

const Car = mongoose.model("Car", carSchema);

module.export = Car;
