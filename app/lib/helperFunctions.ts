export function estimateReadingTime(
  text: string,
  charsPerMinute: number = 600
): string {
  // Handle empty or invalid input
  if (!text || typeof text !== "string") {
    return "0 minutes";
  }

  const charCount = text.length;
  const rawMinutes = charCount / charsPerMinute;

  if (rawMinutes < 1) {
    return "<1 minute";
  }

  const minutes = Math.ceil(rawMinutes);
  return `${minutes} minute${minutes === 1 ? "" : "s"}`;
}

export function characterCount(text: string): { [key: string]: number } {
  const charMap: { [key: string]: number } = {};

  for (let char of text) {
    char = char.toUpperCase();
    if (/[A-Z]/.test(char)) {
      charMap[char] = (charMap[char] || 0) + 1;
    }
  }

  const sortedEntries = Object.entries(charMap).sort(
    ([keyA, countA], [keyB, countB]) =>
      countB - countA || keyA.localeCompare(keyB)
  );

  return Object.fromEntries(sortedEntries);
}
