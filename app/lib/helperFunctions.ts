export function estimateReadingTime(
    text: string,
    charsPerMinute: number = 600
  ): string {
    // Handle empty or invalid input
    if (!text || typeof text !== 'string') {
      return "0 minutes";
    }
  
    const charCount = text.length;
    const rawMinutes = charCount / charsPerMinute;
    
    if (rawMinutes < 1) {
      return "<1 minute";
    }
  
    const minutes = Math.ceil(rawMinutes);
    return `${minutes} minute${minutes === 1 ? '' : 's'}`;
  }