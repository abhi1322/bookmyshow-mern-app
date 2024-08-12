const express = require("express");
const router = express.Router();
const BookShow = require("../models/BookShow.js");
const cors = require("cors");

router.use(express.json());
router.use(cors());

router.post("/booking", async (req, res) => {
  const { movie, slot, seats } = req.body;

  try {
    const newBooking = new BookShow({ movie, slot, seats });
    await newBooking.save();
    res.status(201).json(newBooking);                                                                                                                                                    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const app = express();
