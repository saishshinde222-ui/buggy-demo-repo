import React from "react";

// REACT_DANGEROUS_HTML - XSS risk
export function UserProfile({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
