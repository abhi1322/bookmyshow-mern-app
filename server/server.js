const express = require("express");
const cors = require("cors");
const connect = require("./db/connectDB");
const BookShow = require("./models/BookShow");
const app = express();

// middleware
app.use(express.json());
app.use(cors());
// dbconnect
connect();

// app.use("api", require("./routes/route.js"));
app.post("/booking", async (req, res) => {
  const { movie, slot, seats } = req.body;
  try {
    const newBooking = new BookShow({ movie, slot, seats });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/booking", async (req, res) => {
  try {
    const bookings = await BookShow.find({});
    if (bookings.length == 0) return "No previous bookings";
    res.json(bookings[bookings.length - 1]);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(8080, () => {
  console.log("\x1b[30mWelcome to book myshow API: \x1b[0m");
  console.log(`\x1b[35m Server -> http://localhost:8080 \x1b[0m`);
});
