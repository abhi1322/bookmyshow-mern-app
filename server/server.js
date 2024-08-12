const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// server listen
app.listen(8080, () => {
  console.log("\n\x1b[30mWelcome to book myshow API: \x1b[0m");
  console.log(`\x1b[35m Server -> http://localhost:8080 \x1b[0m`);
});
