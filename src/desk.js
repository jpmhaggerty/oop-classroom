class Desk {
  constructor(length, width, height, isWhiteBoard) {
    this.length = length;
    this.width = width;
    this. height = height;
    this.isWhiteboard = isWhiteBoard;
    this.content = '';
  }

  write(inputStr) {
    this.content += inputStr;
  }

  wipe () {
    if(isWhiteBoard) {this.content = ''}
  }
}

module.exports = Desk
