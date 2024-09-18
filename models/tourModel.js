const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Tour name not included..."]
  },
  price: {
    type: Number,
    required: [true, "Tour price missing..."]
  },
  rating: {
    type: Number,
    default: 4.5
  }
});

const Tour = new mongoose.model("Tour",tourSchema);

module.exports = Tour;