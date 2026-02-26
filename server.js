const express = require("express");
const app = express();

// ✅ Callback URL for eBay OAuth
app.get("/callback", (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.send("No authorization code received.");
  }
  res.send(`Authorization code: ${code}<br>
            You can now exchange this code for an access token.`);
});

// ✅ Privacy Policy page
app.get("/privacy", (req, res) => {
  res.send("This app uses your eBay account only to fetch data via API. We do not store passwords.");
});

// ✅ Declined OAuth page
app.get("/declined", (req, res) => {
  res.send("You declined OAuth access. You can retry via the app.");
});

// Optional: homepage for testing
app.get("/", (req, res) => {
  res.send("Server is running. Use /callback for OAuth.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started on port " + PORT));