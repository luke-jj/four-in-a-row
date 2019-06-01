class Board {

  constructor() {
    this.rows = 6;
    this.columns = 7;
    this.spaces = this.createSpaces();
  }

  /*
   * create all the spaces or 'slots' on the game board
   * return 2d array of spaces
   */

  createSpaces() {
    const spaces = new Array();
    for (let i = 0; i < this.columns; i++) {
      const column = new Array();
      for (let j = 0; j < this.rows; j++) {
        column.push(new Space(i, j));
      }
      spaces.push(column);
    }
    return spaces;
  }

  /*
   * Draw associated SVG spaces for all game spaces.
   */

  drawHTMLBoard() {
    for (let i = 0; i < this.spaces.length; i++) {
      for (let j = 0; j < this.spaces[i].length; j++) {
        this.spaces[i][j].drawSVGSpace();
      }
    }
  }

}
