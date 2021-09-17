class Marker {
  constructor(size, color, remainingInk) {
    this.size = size;
    this.color = color;
    this. remainingInk = remainingInk;
  }

  write(word) {
    let charsToWrite = 0;

    if (this.remainingInk < word.length) {
      let inkCount = this.remainingInk;
        for (let i = 0; i < word.length; i++) {
          if (word[i] !== ' ') {inkCount--;}
          charsToWrite++;
          if (inkCount <= 0) {break};
        }
    } else {
      charsToWrite = word.length;
    }

    this.remainingInk -= word.split(' ').join('').length;
    if (this.remainingInk <0) {this.remainingInk = 0};

    return word.substring(0, charsToWrite);
  }

}

module.exports = Marker
