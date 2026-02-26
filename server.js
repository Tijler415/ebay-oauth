// server.js
import express from "express";

const app = express();
const port = process.env.PORT || 3000; // Render sets the port automatically

// ===== eBay login route =====
app.get("/ebay-login", (req, res) => {
  const runame = "TadhgOMe-sandbox-PRD-a8be4e200-823ae751"; // your sandbox RuName
  const redirectUrl = "https://ebay-oauth-0dh9.onrender.com/ebay-success"; // success endpoint
  const ebayUrl = `https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&runame=${runame}&ru=${encodeURIComponent(redirectUrl)}`;
  console.log("Redirecting user to eBay login:", ebayUrl);
  res.redirect(ebayUrl);
});

// ===== Success route =====
app.get("/ebay-success", (req, res) => {
  res.send(`
    <h1>🎉 eBay login successful!</h1>
    <p>You are now logged in with eBay.</p>
    <a href="/ebay-login">Login again</a>
  `);
});

// ===== Failure route =====
app.get("/ebay-failure", (req, res) => {
  res.send(`
    <h1>❌ eBay login failed or was declined</h1>
    <p>Please try again.</p>
    <a href="/ebay-login">Try Login</a>
  `);
});

// ===== Privacy policy route =====
app.get("/privacy", (req, res) => {
  res.send(`
    <h1>🛡️ Privacy Policy</h1>
    <p>We respect your users' data. Your login information is only used to authenticate with eBay and is not shared with any third party.</p>
  `);
});

// ===== Start server =====
app.listen(port, () => {
  console.log(`Server running at https://ebay-oauth-0dh9.onrender.com`);
});
// ===== Start the server =====
app.listen(port, () => {
  console.log(`Server running at https://ebay-oauth-0dh9.onrender.com`);
});
