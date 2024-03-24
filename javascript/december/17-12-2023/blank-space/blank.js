
function generateBlankText(length, lineCount = 1, whitespace = " ") {
  if (!length) return "";
  const lineBreak = lineCount > 1 ? "\n" : "";
  return lineBreak.repeat(lineCount - 1) + whitespace.repeat(length);
}