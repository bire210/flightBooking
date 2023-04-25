const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    airline: {
      type: String,
    },
    flightNo: {
      type: String,
    },
    departure: {
      type: String,
    },
    arrival: {
      type: String,
    },
    departureTimel: {
      type: Date,
    },
    arrivalTime: {
      type: Date,
    },
    seats: { type: Number },
    price: { type: Number },
  },
  {
    timestamps: true,
  }
);

const flightModel = mongoose.model("flight", flightSchema);

module.exports = { flightModel };

