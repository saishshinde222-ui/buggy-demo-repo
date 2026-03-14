// SENSITIVE_CONFIG - API keys and secrets in config
module.exports = {
  NODE_ENV: "development",
  DEBUG: "true",
  API_KEY: "API_KEY_PLACEHOLDER_32_CHARS_FOR_DEMO",
  DATABASE_PASSWORD: "admin123!",
  AWS_ACCESS_KEY_ID: "AKIAIOSFODNN7EXAMPLE",
  aws_secret_access_key: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(",") ?? [],
  },
};
