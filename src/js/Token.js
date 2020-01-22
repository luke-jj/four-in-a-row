class Token {

  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
    this.columnLocation = 0;
  }

  get htmlToken() {
    return document.getElementById(this.id);
  }

  /*
   * returns the left offset in relation to the nearest ancestor
   * @return  {number}    Left offset of this token object's htmlToken
   */

  get offsetLeft() {
    return this.htmlToken.offsetLeft;
  }

  /*
   * Draw new html token
   */

  drawHTMLToken() {
    const div = document.createElement('div');
    document.getElementById('game-board-underlay').appendChild(div);
    div.setAttribute('id', this.id);
    div.setAttribute('class', 'token');
    div.style.backgroundColor = this.owner.color;
  }

  /*
   * Moves htmlToken one column to the left.
   */

  moveLeft() {
    if (this.columnLocation > 0) {
      this.htmlToken.style.left = `${this.offsetLeft - 76}px`;
      this.columnLocation -= 1;
    }
  }

  /*
   * Moves html token one column to right
   * @param   {number}    columns - number of columns in the game board
   */

  moveRight(columns) {
    if (this.columnLocation < columns - 1) {
      this.htmlToken.style.left = `${this.offsetLeft + 76}px`;
      this.columnLocation += 1;
    }
  }

  /*
   * Drops html token into targeted board space.
   * @param   {Object}    target  - Targeted space for dropped token.
   * @param   {function}  reset   - function to call after animation is complete
   */

  drop(target, reset) {
    this.dropped = true;

    $(this.htmlToken).animate({
      top: (target.y * target.diameter)
    }, 750, 'easeOutBounce', reset);
  }
}

