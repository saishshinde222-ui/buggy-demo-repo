const express = require("express");
const { exec } = require("child_process");

const app = express();

// INSECURE_TLS - SSL verification disabled
const https = require("https");
const agent = new https.Agent({
  rejectUnauthorized: false,
});

// HARDCODED_PASSWORD
const DB_PASSWORD = "super_secret_db_pass_12345";

// SQL_CONCATENATION - SQL injection risk
function getUser(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return query;
}

// COMMAND_INJECTION_RISK
function runBackup(path) {
  const cmd = "tar -czf backup.tar.gz " + path;
  exec(cmd, (err, stdout) => console.log(stdout));
}

// DEBUG_STATEMENT
console.log("Server starting with debug info...");

// DEBUGGER_STATEMENT
debugger;

app.get("/user/:id", (req, res) => {
  const user = getUser(req.params.id);
  res.send(user);
});

app.listen(3000);
