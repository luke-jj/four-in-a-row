class Game {

  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  /*
   * return the active player
   */

  get activePlayer() {
    return this.players.find(player => player.active);
  }

  /*
   * create Players and return them in an array
   */

  createPlayers() {
    return [
      new Player('player1', 1, '#c6301f', true),
      new Player('player2', 2, '#301fc6', false)
    ];
  }


  /*
   * Checks if there a winner on the board after each token drop.
   * @param   {Object}    Targeted space for dropped token.
   * @return  {boolean}   Boolean value indicating whether the game has been won (true) or not (false)
   */

  checkForWin(target){
    const owner = target.token.owner;
    let win = false;

    // vertical
    for (let x = 0; x < this.board.columns; x++ ){
      for (let y = 0; y < this.board.rows - 3; y++){
        if (this.board.spaces[x][y].owner === owner &&
          this.board.spaces[x][y+1].owner === owner &&
          this.board.spaces[x][y+2].owner === owner &&
          this.board.spaces[x][y+3].owner === owner) {
            win = true;
        }
      }
    }

    // horizontal
    for (let x = 0; x < this.board.columns - 3; x++ ){
      for (let y = 0; y < this.board.rows; y++){
        if (this.board.spaces[x][y].owner === owner &&
          this.board.spaces[x+1][y].owner === owner &&
          this.board.spaces[x+2][y].owner === owner &&
          this.board.spaces[x+3][y].owner === owner) {
            win = true;
        }
      }
    }

    // diagonal
    for (let x = 3; x < this.board.columns; x++ ){
      for (let y = 0; y < this.board.rows - 3; y++){
        if (this.board.spaces[x][y].owner === owner &&
          this.board.spaces[x-1][y+1].owner === owner &&
          this.board.spaces[x-2][y+2].owner === owner &&
          this.board.spaces[x-3][y+3].owner === owner) {
            win = true;
        }
      }
    }

    // diagonal
    for (let x = 3; x < this.board.columns; x++ ){
      for (let y = 3; y < this.board.rows; y++){
        if (this.board.spaces[x][y].owner === owner &&
          this.board.spaces[x-1][y-1].owner === owner &&
          this.board.spaces[x-2][y-2].owner === owner &&
          this.board.spaces[x-3][y-3].owner === owner) {
            win = true;
        }
      }
    }

    return win;
  }

  /*
   * switches active player status
   */

  switchPlayers() {
    for (let player of this.players) {
      player.active = !(player.active);
    }

    const statusMsg = `It's ${this.activePlayer.name}'s turn`;
    const statusDisplay = document.getElementById('game-over');
    statusDisplay.textContent = statusMsg;
  }

  /*
   * find space object to drop token into; drop token
   */

  playToken() {
    const spaces = this.board.spaces;
    const activeToken = this.activePlayer.activeToken;
    const targetColumn = spaces[activeToken.columnLocation];
    let targetSpace = null;

    for (let space of targetColumn) {
      if (space.token === null) {
        targetSpace = space;
      }
    }

    if (targetSpace !== null) {
      game.ready = false;
      // second argument is a callback function, the callback function is
      // executed when the .drop function has finished.
      activeToken.drop(targetSpace, () => {
        game.updateGameState(activeToken, targetSpace);
      });
    }
  }

  /*
   * Updates game state after a token is dropped.
   * @param   {Object}  token  - The token that's being dropped.
   * @param   {Object}  target - Targeted space for dropped item.
   */

  updateGameState(token, target) {
    target.mark(token);

    if (!this.checkForWin(target)) {
      this.switchPlayers();

      if (this.activePlayer.checkTokens()) {
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
      } else {
        this.gameOver('No more tokens');
      }

    } else {
      this.gameOver(`${target.owner.name} wins!`);
    }
  }

  /*
   * Display a game over message.
   * @param {String} message - Game over message
   */

  gameOver(message) {
    const gameOver = document.getElementById('game-over');
    gameOver.textContent = message;
  }

  /*
   * handle keyboard input during the
   */

  handleKeydown(event) {
    if (this.ready) {
      if (event.key == "ArrowLeft") {
        this.activePlayer.activeToken.moveLeft();
      } else if (event.key == "ArrowRight") {
        this.activePlayer.activeToken.moveRight(this.board.columns);
      } else if (event.key == "ArrowDown") {
        this.playToken();
      }
    }
  }

  /*
   * Draw the board and set player names.
   */

  startGame(playerOneName, playerTwoName) {
    this.board.drawHTMLBoard();
    this.players[0].name = playerOneName;
    this.players[1].name = playerTwoName;
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;

    const statusMsg = `It's ${this.activePlayer.name}'s turn`;
    const statusDisplay = document.getElementById('game-over');
    statusDisplay.style.display = "block";
    statusDisplay.textContent = statusMsg;
  }


}
