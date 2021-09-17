class Desk {
  constructor(length, width, height, isWhiteboard) {
    this.length = length;
    this.width = width;
    this. height = height;
    this.isWhiteboard = isWhiteboard;
    this.content = '';
  }

  write(inputStr) {
    this.content += inputStr;
  }

  wipe () {
    if(this.isWhiteboard) {this.content = ''};
  }
}

module.exports = Desk
