export function readingTimeInMinutes(text, options = {}) {
  options = Object.assign({ wpm: 200 }, options)
  const cleaned = text.replace(/(<.*?>)|(\\n)|(&#\d*?;)/g, '')
  const words = cleaned.split(' ').length
  return Math.round(words / options.wpm)
}
