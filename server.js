// server.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// ===== eBay login route =====
app.get("/ebay-login", (req, res) => {
  const runame = "TadhgOMe-sandbox-PRD-a8be4e200-823ae751"; // your sandbox RuName
  const redirectUrl = "https://ebay-oauth-0dh9.onrender.com/callback"; // OAuth callback endpoint
  const ebayUrl = `https://signin.sandbox.ebay.com/ws/eBayISAPI.dll?SignIn&runame=${runame}&ru=${encodeURIComponent(redirectUrl)}`;
  console.log("Redirecting user to eBay login:", ebayUrl);
  res.redirect(ebayUrl);
});

// ===== OAuth callback route =====
app.get("/callback", (req, res) => {
  const authCode = req.query.code; // eBay sends the code here
  const error = req.query.error;   // eBay may send an error if login fails

  if (authCode) {
    res.send(`
      <h1>🎉 OAuth callback received!</h1>
      <p>Auth code: ${authCode}</p>
      <a href="/ebay-login">Login again</a>
    `);
    console.log("Received OAuth code:", authCode);
  } else if (error) {
    res.redirect("/ebay-failure");
  } else {
    res.send(`
      <h1>❌ No auth code received</h1>
      <a href="/ebay-login">Try Login</a>
    `);
  }
});

// ===== Success route (optional for testing) =====
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
    <p>We respect your users' data. Login info is only used to authenticate with eBay and is not shared with any third party.</p>
  `);
});

// ===== Start the server =====
app.listen(port, () => {
  console.log(`Server running at https://ebay-oauth-0dh9.onrender.com`);
});
