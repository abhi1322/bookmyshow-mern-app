const mongoose = require("mongoose");

async function connect() {
  try {
    mongoose.connect("mongodb://localhost:27017/bookMyShow");
    console.log("Connected to MongoDB");
  } catch (error) {}
}

module.exports = connect;
