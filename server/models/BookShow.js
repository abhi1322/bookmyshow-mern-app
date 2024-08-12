const mongoose = require("mongoose");
const BookingSchema = new mongoose.Schema({
  movie: {
    type: String,
  },
  time: {
    type: String,
  },
  selectedSeats: {
    A1: { type: Number, default: 0 },
    A2: { type: Number, default: 0 },
    A3: { type: Number, default: 0 },
    A4: { type: Number, default: 0 },
    D1: { type: Number, default: 0 },
    D2: { type: Number, default: 0 },
  },
});

const BookShow = mongoose.model("BookShow", BookingSchema);

module.exports = BookShow;
