export function readingTimeInMinutes(text: string, options: { wpm?: number } = {}): number {
  const cleaned = text.replace(/(<.*?>)|(\\n)|(&#\d*?;)/g, '')
  const words = cleaned.split(' ').length
  return Math.round(words / (options.wpm ?? 200))
}
