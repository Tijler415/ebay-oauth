const express = require("express");
const app = express();

app.get("/callback", (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.send("No authorization code received.");
  }
  res.send("Authorization code: " + code);
});

app.get("/", (req, res) => {
  res.send("Server is running.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started on port " + PORT));