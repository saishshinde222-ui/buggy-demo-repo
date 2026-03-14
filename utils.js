const crypto = require("crypto");

// WEAK_HASH - MD5 usage
function hashPassword(pwd) {
  return crypto.createHash("md5").update(pwd).digest("hex");
}

// API_KEY_EXPOSED - fake keys for scanner demo (avoids GitHub push protection)
const STRIPE_KEY = "STRIPE_KEY_PLACEHOLDER_32_CHARS_NOT_REAL";
const GITHUB_TOKEN = "GITHUB_TOKEN_PLACEHOLDER_20_CHARS_MIN";
