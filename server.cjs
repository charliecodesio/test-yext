const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/status", (req, res) => {
  const filePath = path.join(__dirname, "services.json");

  try {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    const delay = Math.floor(Math.random() * 5000) + 5000;

    setTimeout(() => {
      console.log("Sending services.json to the frontend");
      res.json(data);
    }, delay);
  } catch (error) {
    console.error("Error reading services.json:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api/status`);
});
