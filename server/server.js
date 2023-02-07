const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["userOne"] });
});

app.listen(5000, () => {
  console.log("Server startet on Port 5000");
});
