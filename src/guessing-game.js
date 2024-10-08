class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;

    this.newGuess = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.newGuess = Math.round((this.max + this.min) / 2);
    return this.newGuess;
  }

  lower() {
    this.max = this.newGuess;
  }

  greater() {
    this.min = this.newGuess;
  }
}

module.exports = GuessingGame;
