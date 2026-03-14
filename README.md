# Buggy Demo Repo

**Intentional vulnerabilities for testing security scanners.**

This repo contains deliberate issues including:
- Hardcoded secrets (AWS, API keys, tokens)
- Vulnerable dependencies (lodash, express, moment, etc.)
- Code patterns: eval, SQL concatenation, innerHTML, debugger
- Config issues: CORS *, rejectUnauthorized: false
- Sensitive data in .env committed

Use with Who Ran What or similar security scan tools.
