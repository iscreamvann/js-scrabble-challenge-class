class Scrabble {
  constructor(word) {
    this.word = word
    this.letterValues = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10
    }
  }

  score() {
    if (!this.word || this.word.trim() === '') return 0

    let score = 0
    let wordMultiplier = 1
    let i = 0

    while (i < this.word.length) {
      let char = this.word[i].toUpperCase()
      let letterMultiplier = 1

      if (char === '{') {
        if (i + 2 < this.word.length && this.word[i + 2] === '}') {
          char = this.word[i + 1].toUpperCase()
          letterMultiplier = 2
          i += 2
        }
      } else if (char === '[') {
        if (i + 2 < this.word.length && this.word[i + 2] === ']') {
          char = this.word[i + 1].toUpperCase()
          letterMultiplier = 3
          i += 2
        }
      } else if (char === '}') {
        // skip closing braces
      } else if (char === ']') {
        // skip closing braces
      } else {
        score += (this.letterValues[char] || 0) * letterMultiplier
      }
      i++
    }

    if (this.word[0] === '{' && this.word[this.word.length - 1] === '}') {
      wordMultiplier = 2
    }

    if (this.word[0] === '[' && this.word[this.word.length - 1] === ']') {
      wordMultiplier = 3
    }

    return score * wordMultiplier
  }
}

module.exports = Scrabble
