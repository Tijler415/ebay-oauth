// server.js
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// ===== eBay login route =====
app.get("/ebay-login", (req, res) => {
  const runame = "TadhgOMe-sandbox-PRD-a8be4e200-823ae751"; // your sandbox RuName
  const redirectUrl = "https://ebay-oauth-0dh9.onrender.com/ebay-success"; // success endpoint
  const ebayUrl = `https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&runame=${runame}&ru=${encodeURIComponent(redirectUrl)}`;
  res.redirect(ebayUrl);
});

// ===== Success route =====
app.get("/ebay-success", (req, res) => {
  res.send("🎉 eBay login successful! You can now access your account.");
});

// ===== Failure route =====
app.get("/ebay-failure", (req, res) => {
  res.send("❌ eBay login failed or was declined. Please try again.");
});

// ===== Privacy policy route =====
app.get("/privacy", (req, res) => {
  res.send(`
    🛡️ Privacy Policy:<br>
    We respect your users' data. Your login information is only used to authenticate with eBay
    and is not shared with any third party.
  `);
});

// ===== Start the server =====
app.listen(port, () => {
  console.log(`Server running at https://ebay-oauth-0dh9.onrender.com`);
});
