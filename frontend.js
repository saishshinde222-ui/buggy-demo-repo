// EVAL_USAGE
function parseJson(input) {
  return eval("(" + input + ")");
}

// INNERHTML_ASSIGNMENT - XSS risk
function renderUser(name) {
  document.getElementById("user").innerHTML = name;
}

// DOCUMENT_WRITE
document.write("<script>alert('loaded')</script>");

// new Function - DYNAMIC_CODE
const fn = new Function("a", "b", "return a + b");

// localStorage SENSITIVE_STORAGE
localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...");
localStorage.setItem("password", "temp123");
