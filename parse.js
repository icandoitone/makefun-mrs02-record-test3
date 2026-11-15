// Placeholder stub for the markdown renderer.
// The real parser will be written later; for now parse
// simply hands the input back untouched. Non-string input
// is coerced first so the stub never throws on odd cases.
export function parse(markdown) {
  if (typeof markdown !== "string") return String(markdown);
  return markdown;
}
